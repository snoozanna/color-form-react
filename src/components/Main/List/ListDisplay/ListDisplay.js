import React, { useContext } from "react";
import { ColorsContext } from "../../../../contexts/colors.context";
import "./ListDisplay.css";
// import { gsap } from "gsap";

const ListDisplay = () => {
  // const [colors, setColor] = useState(favColorData);
  const { colors, deleteColor, changeColor, resetForm } =
    useContext(ColorsContext);
  // const colorHeart = document.getElementById("colorHeart");
  // gsap.to(colorHeart, {
  //   css: {
  //     scale: 0.9,
  //   },
  //   duration: 1,
  //   repeat: 5,
  //   yoyo: true,
  // });

  return (
    <>
      <div className="title-wrapper">
        <h1>Favourite Colour List</h1>
        <button className="resetButton btn" onClick={() => resetForm()}>
          Reset
        </button>
      </div>
      <ul className="color-list">
        `
        {colors.map((color) => (
          <li className="color-item" key={color._id}>
            <div className="color-flex-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="85"
                style={{ fill: color.favouriteColor }}
                onClick={() => changeColor(color._id)}
                className="color-heart-container"
              >
                <path
                  id="colorHeart"
                  className="color-heart"
                  d="M92.71 7.27c-9.71-9.69-25.46-9.69-35.18 0L50 14.79l-7.54-7.52C32.75-2.42 17-2.42 7.29 7.27s-9.71 25.41 0 35.1L50 85l42.71-42.63c9.72-9.69 9.72-25.41 0-35.1z"
                />
              </svg>
            </div>
            <div className="color-info-container color-flex-item">
              <p className="color-name">Color: {color.favouriteColor} </p>
              <p>Reason: {color.reason}</p>
            </div>
            <div className="btn-container color-flex-item">
              <button onClick={() => changeColor(color._id)}>Choose</button>
              <button onClick={() => deleteColor(color._id)}>Get rid</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListDisplay;
