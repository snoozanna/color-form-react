import React, { useContext } from "react";
import Form from "./Form/Form";
import List from "./List/List";

import { ColorsContext } from "./../../contexts/colors.context";

import "./Main.css";

function Main() {
  // const { useState } = React;
  const { background, setBackground } = useContext(ColorsContext);
  // const [background, setBackground] = useState("#800059");
  // const containerRef = useRef();

  console.log("background", background);
  function showValue(e) {
    let currentColor = e.target.value;
    setBackground(currentColor);
  }
  // console.log("ref", containerRef);
  return (
    <>
      <div className="Main">
        {/* <p>Parent State: {JSON.stringify(background)}</p> */}
        <div
          id="mainContainer"
          className="main-container"
          // ref={containerRef}
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
