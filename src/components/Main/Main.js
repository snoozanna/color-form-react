import React from "react";
import Form from "./Form/Form";
import List from "./List/List";
import "./Main.css";

function Main(props) {
  const { useState } = React;
  const [background, setBackground] = useState("#0e101c");

  function showValue() {
    let input = document.getElementById("colorInput");
    console.log(input.value);
    setBackground(input.value);
  }
  // return <div className="Main">{props.children}</div>;
  return (
    <div style={{ backgroundColor: background }}>
      <p>Parent State: {JSON.stringify(background)}</p>
      <Form callback={showValue} />
      <List />
    </div>
  );
}

export default Main;
