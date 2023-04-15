import React from 'react';
import { useState } from 'react';

function App({initialCount=0}){
    const [count, setCount] = useState(initialCount);

    return(
        <>
        count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count +1)}>+</button>
        <button onClick={() => setCount(count -1)}>-</button>
        </>
    )
}


//create multiple hooks
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}
