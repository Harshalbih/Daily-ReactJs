//simple one to avoid prop drilling
import { useContext, createContext } from "react";
const Context = createContext();

const Child5 = () => {
  const usingContext = useContext(Context);
  return <>{usingContext.data}</>;
};
const Child4 = () => {
  return <Child5 />;
};
const Child3 = () => {
  return <Child4 />;
};
const Child2 = () => {
  return <Child3 />;
};
const Child = () => {
  return <Child2 />;
};
function App() {
  return (
    <>
      <Context.Provider value={{ data: "Passing data" }}></Context.Provider>
      <Child />
    </>
  );
}

export default App;

//useContext for Theme
import { useContext, createContext } from "react";
import React from "react";

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
