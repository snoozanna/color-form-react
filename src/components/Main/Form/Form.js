import React from "react";
// import ReactDOM from "react-dom";
import { ColorsContext } from "./../../../contexts/colors.context";
import { useForm } from "react-hook-form";
import "./Form.css";

function Form(props) {
  const { useContext } = React;
  const { addColor } = useContext(ColorsContext);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    addColor(data);
  }; // your form submit function which will invoke after successful validation

  // console.log(watch("reason")); // you can watch individual input by pass the name of the input

  return (
    <div className="form-wrapper">
      <h2>Pick your colour</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Color</label>
        <input
          id="colorInput"
          type="color"
          name="favouriteColor"
          defaultValue=" #800059;;"
          ref={register}
          onChange={props.callback}
        />
        <label>Reason</label>
        <input
          name="reason"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.exampleRequired && <p>This field is required</p>}
        <input type="submit" className="btn" />
      </form>
    </div>
  );
}

export default Form;
