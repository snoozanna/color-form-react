import React from "react";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./Form.css";

function Form(props) {
  const { useState } = React;
  const { register, handleSubmit, watch, errors } = useForm();
  const [state, setState] = useState({
    background: "#0e101c",
    newColor: {
      id: "",
      favouriteColor: "",
      reason: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const newFavColor = setState(data);
    console.log("favcolor", newFavColor);

    // addColor(data);
  }; // your form submit function which will invoke after successful validation

  // console.log(watch("reason")); // you can watch individual input by pass the name of the input

  return (
    <div className="Form-wrapper" style={{ backgroundColor: state.background }}>
      <h2>Add fav colour</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Color</label>
        <input
          id="colorInput"
          type="color"
          name="favouriteColor"
          defaultValue=" #0e101c;"
          ref={register}
          onChange={props.callback}
        />
        <label>Reason</label>
        <input
          name="reason"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.exampleRequired && <p>This field is required</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
