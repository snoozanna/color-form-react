//// not using this page currently 

import React, { createContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { v4 as uuidv4 } from "uuid";
// import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex

export const ColorsContext = createContext({
  addColor: () => {},
  updatePet: () => {},
  deleteColor: () => {},
  error: null,
  colors: [],
});

export const ColorsProvider = (props) => {
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);
  const { addToast } = useToasts();

  const addColor = (formData) => {
    let newColor = {
      ...formData,
      _id: uuidv4(),
    };
    setColors([...colors, newColors]);
    addToast(`Saved ${newColor.title}`, {
      appearance: "success",
    });
  };



  const deleteColor = function (id) => {
    // Get index
    const index = colors.findIndex((color) => color._id === id);
    const deletedColor = pets[index];

    if (index === -1) {
      addToast(`Error: Failed to delete pet id: ${id}`, {
        appearance: "error",
      });
      return;
    }
    // recreate the Todos array without that Todo
    const updatedColors = [...colors.slice(0, index), ...colors.slice(index + 1)];
    setColors(updatedColors);
    addToast(`Deleted ${deletedColor.title}`, {
      appearance: "success",
    });
  };

  return (
    <ColorsContext.Provider
      value={{
        colors,
        error,
        addColor,
        deleteColor,
      }}
    >
      {props.children}
    </ColorsContext.Provider>
  );
};
