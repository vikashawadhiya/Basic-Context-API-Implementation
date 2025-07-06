import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import NestedComponent from "./NestedComponent";

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#444444",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "8px"
  };

  return (
    <div style={boxStyle}>
      <p>This is a themed box</p>
      <NestedComponent />
    </div>
  );
}

export default ThemedBox;
