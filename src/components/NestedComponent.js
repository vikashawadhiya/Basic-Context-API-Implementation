import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function NestedComponent() {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "#e0e0e0" : "#666",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px"
  };

  return <div style={style}>Nested component respecting theme: {theme} mode</div>;
}

export default NestedComponent;
