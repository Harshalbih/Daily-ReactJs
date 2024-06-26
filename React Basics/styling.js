//inline styling
const Header = () => {
    return (
      <>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }

//camelCased Property Names(instead of background-color)
const Header = () => {
    return (
      <>
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }
  


//Javascript object
const Header= () =>{
    const myStyle ={
        color: "black",
        backgroundColor: "pink",
        padding: "10px"
    }

    return(
        <>
        <h1 style={myStyle}>
            Hello
        </h1>
        </>
    )
}

//Sass** (>npm i sass)
$myColor: red;

p {
  color: $myColor;
}

//dynamic class
const Button =  () => {
  const [className, setClassName] = React.useState("foo");

  return (
    <button className={className} onClick={() => setClassName("bar")}>Clicking this will change the class name from "foo" to "bar"</button>
  );
};