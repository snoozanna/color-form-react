import React from "react";
import "./List.css";

import NoResult from "./NoResult/NoResult";
import ListDisplay from "./ListDisplay/ListDisplay";

function List(props) {
  const { useState } = React;
  const [colors, setColors] = useState();

  // const colorList = colors.items;
  // console.log(colorList);
  // let subComponent = null;

  // if (listItem.items && listItem.items.length) {
  //   subComponent = <ListDisplay items={listItem.items} />;
  // } else {
  //   subComponent = <NoResult />;
  //   console.log("props", props);
  // }

  return (
    <div>
      <ListDisplay items={props} />
      {/* {subComponent} */}
    </div>
  );
}

export default List;
