import React from "react";
import Form from "./Form/Form";
import List from "./List/List";

import "./Main.css";

function Main(props) {
  const { useState } = React;
  const [background, setBackground] = useState("#800059;");

  function showValue() {
    let input = document.getElementById("colorInput");
    // console.log(input.value);
    setBackground(input.value);
  }
  return (
    <>
      <div className="Main">
        {/* <p>Parent State: {JSON.stringify(background)}</p> */}
        <div
          id="mainContainer"
          className="main-container"
          style={{ backgroundColor: background }}
        >
          <Form callback={showValue} />
        </div>
        <List />
      </div>
    </>
  );
}

export default Main;
