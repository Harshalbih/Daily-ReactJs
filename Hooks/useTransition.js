import React, { useState, useTransition } from "react";

function App() {
  const [isPending, setTransition] = useTransition();
  const [text, setText] = useState();

  let listNum = 10000;
  function handleChnage(e) {
    setTransition(() => {
      let output = [];
      for (let i = 0; i < listNum; i++) {
        output.push(e.target.value);
      }
      setText(output);
    });
  }
  return (
    <div className="App">
      <input type="text" placeholder="text" onChange={handleChnage} />
      {isPending
        ? "Loading..."
        : text?.map((val) => {
            return <div>{val}</div>;
          })}
    </div>
  );
}

export default App;
