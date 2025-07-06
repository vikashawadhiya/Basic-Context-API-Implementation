import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemedBox from "./components/ThemedBox";

function AppContent() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px", backgroundColor: theme === "light" ? "#f0f0f0" : "#222", minHeight: "100vh" }}>
      <h1 style={{ color: theme === "light" ? "#000" : "#fff" }}>Context API Theme Toggle</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <ThemedBox />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
