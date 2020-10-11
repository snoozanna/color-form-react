import React from "react";
import "./ListDisplay.css";

const { useState } = React;
const favColorData = [
  {
    _id: 1,
    favouriteColor: "#2fca4e",
    reason: "like it",
  },
  {
    _id: 2,
    favouriteColor: "#2b569c",
    reason: "nice",
  },
  {
    _id: 3,
    favouriteColor: "#cb9625",
    reason: "pretty",
  },
];

function ListDisplay() {
  const [colors, setColor] = useState(favColorData);
  console.log("state", colors);

  function deleteItem(id) {
    console.log(`Deleting ${id}`);
    const indexOfColor = colors.findIndex((color) => color._id === id);
    const newColors = [
      ...colors.slice(0, indexOfColor),
      ...colors.slice(indexOfColor + 1),
    ];
    setColor(newColors);
  }

  function changeBackground(id) {
    console.log(`Changing background ${id}`);
  }

  return (
    <>
      <h1>Favourite Colour List</h1>
      <ul className="color-list">
        {colors.map((color) => (
          <li className="color-item" key={color._id}>
            <div className="color-box"> {color.favouriteColor} </div>
            <p>Reason: {color.reason}</p>
            <button>Choose</button>
            <button onClick={() => deleteItem(color._id)}>Get rid</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListDisplay;
