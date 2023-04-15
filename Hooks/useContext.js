import { func } from "prop-types";
import React from "react";
import { useContext, createContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
const TextProvider = React.createContext(themes.light);

function App() {
  return (
    <TextProvider.Provider value={themes.dark}>
      <Toolbar />
    </TextProvider.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <Themebutton />
    </div>
  );
  function Themebutton() {
    const theme = useContext(TextProvider);
    <button style={{ background: theme.background, color: theme.foreground }}>
      Styeled Component
    </button>;
  }
}
