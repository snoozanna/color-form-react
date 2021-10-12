import React from "react";
import "./List.css";

import ListDisplay from "./ListDisplay/ListDisplay";

function List(props) {
  return (
    <div className="list-container">
      <ListDisplay items={props} />
      {/* {subComponent} */}
    </div>
  );
}

export default List;
