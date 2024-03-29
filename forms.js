//Use the useState Hook to manage the input:
import {useState} from "react";
import { ReactDOM } from "react";

function MyForm (){
    const [name, setName] =useState("");

    return(
        <form>
            <input type={text} value={name}
            onChange={(event)=> setName(event.target.value)} />
        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);


//Add a submit button and an event handler in the onSubmit attribute::
import {useState} from "react";
import { ReactDOM } from "react";

function MyForm (){
    const [name, setName] =useState("");

    const handlerchange= (e) => {
        e.preventDefault();
        alert(`Name entered was ${name}`)
    }   

    return(
        <form onSubmit={handlerchange}>
            <input type={text} value={name}
            onChange={(event)=> setName(event.target.value)} />
            <input type="submit" />
        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

//select box, where the selected value "Volvo" is initialized in the constructor:
function myForm (){
    const [myCar, setMycar]= useState("volvo");

    const handlerchange= (event) =>{
        setMycar(event.target.value)
    }

    return(
        <form>
            <select value={myCar} onChange={handlerchange}>
                <option value="ford">ford</option>
                <option value="volvo">volvo</option>
                <option value="lambo">lambo</option>
            </select>
        </form>
    )
}

//Form revise. Unlinked from above.
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
