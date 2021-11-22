import React, { createContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { v4 as uuidv4 } from "uuid";
// import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex

export const ColorsContext = createContext({
  addColor: () => {},
  deleteColor: () => {},
  changeColor: () => {},
  error: null,
  colors: [],
  background: [],
});

export const ColorsProvider = (props) => {
  const [colors, setColors] = useState([]);
  const [background, setBackground] = useState("#800059");
  // const [error, setError] = useState(null);

  const { addToast } = useToasts();

  const addColor = (formData) => {
    let newColor = {
      ...formData,
      _id: uuidv4(),
    };
    console.log("new color", newColor);
    setColors([...colors, newColor]);
    addToast(`Saved ${newColor.favouriteColor}`, {
      appearance: "success",
    });
  };

  const changeColor = (id) => {
    console.log("trying to change color");
    const index = colors.findIndex((color) => color._id === id);
    const newColor = colors[index];

    if (index === -1) {
      addToast(`Error: Failed to change color id: ${id}`, {
        appearance: "error",
      });
      return;
    }

    setBackground(newColor.favouriteColor);
    addToast(`Changed to ${newColor.favouriteColor}`, {
      appearance: "success",
    });
  };

  const deleteColor = async (id) => {
    // Get index
    console.log("trying to delete colour");
    const index = colors.findIndex((color) => color._id === id);
    const deletedColor = colors[index];

    if (index === -1) {
      addToast(`Error: Failed to delete color id: ${id}`, {
        appearance: "error",
      });
      return;
    }
    // recreate the colors array without that color
    const updatedColors = [
      ...colors.slice(0, index),
      ...colors.slice(index + 1),
    ];
    setColors(updatedColors);
    addToast(`Deleted ${deletedColor.favouriteColor}`, {
      appearance: "success",
    });
  };

  const resetForm = () => {
    const colors = [];
    setColors(colors);
    setBackground("#800059");
    addToast(`Reset complete`, {
      appearance: "success",
    });
  };

  return (
    <ColorsContext.Provider
      value={{
        colors,
        background,
        // error,
        addColor,
        changeColor,
        deleteColor,
        resetForm,
        setBackground,
      }}
    >
      {props.children}
    </ColorsContext.Provider>
  );
};
