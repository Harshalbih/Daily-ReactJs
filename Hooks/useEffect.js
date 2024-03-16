import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);

  useEffect(() => {
    setCalc(() => count * 2);
  }, [count]);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>calc:{calc}</p>
    </>
  );
}

//No dependency passed:
useEffect(() => {
  //Runs on every render
});

//An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

//Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

//Below will not stop render when no dependecy array is passed
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

//cleanup timer
useEffect(() => {
  let timerId = setTimeout(() => {
    // do something     
    timerId = null;
  }, 3000);

// cleanup the timmer when component unmout
  return () => clearTimeout(timerId);
}, []);


//clean up useEffect(using return function)
useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
      // Clean up the subscription
      subscription.unsubscribe();
    };
  });

//HookCounterOne.js File
import { useState, useEffect } from "react";
 
function HookCounterOne() {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
 
    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times{" "}
            </button>
        </div>
    );
}
export default HookCounterOne;
