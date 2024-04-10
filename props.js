//simple props
//app.js
import Profile from "./profile";

export default function App() {
  return (
    <div className="App">
      <Profile title="hi" head="hii" />
      <Profile title="hic" head="hic" />
    </div>
  );
}

//profile.js 
import React from "react";

export default function Profile({ title, head }) {
  return (
    <div>
      <div>title is {title}</div>
      <div> head is {head} </div>
    </div>
  );
}







//Send the "brand" property from the Garage component to the Car component:
function Car(props) {
  return <h1> I'm a {props.brand}</h1>;
}

function Garage() {
  return (
    <>
      <h1>THis is garage</h1>
      <Car brand="Lambo" />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);



//Create a variable named carName and send it to the Car component:
function Car(props) {
  return <h1> I'm a {props.brand}</h1>;
}

function Garage() {
  const carName = "Lambo";
  return (
    <>
      <h1>THis is garage</h1>
      <Car brand={carName} />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);



//Create an object named carInfo and send it to the Car component:
function Car(props) {
  return <h1> I'm a {props.brand.Speed}</h1>;
}

function Garage() {
  const carInfo = { name: "Lambo", Speed: "140mph" };
  return (
    <>
      <h1>THis is garage</h1>
      <Car brand={carInfo} />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);


