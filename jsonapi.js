import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
function App() {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  const [userinfo, setUserinfo] = useState([]);
  const [err, setErr]= useState(false);
  useEffect(()=>{
    const apihandle = async ()=> {
    try {
    const res = await fetch(url);
    const {user} = await res.json();
    console.log(user)
    setUserinfo(user);
      }
    catch(err){
      setErr(true);
    }
  }
  apihandle();
  },[url])


  return (
    
    <div className="App">
     {err && "Error"}
     {!err && userinfo.map((emp)=> <p key={emp.id}>{emp.id}</p>)}
     {!err && userinfo.map((emp)=> <p key={emp.title}>{emp.title}</p>)}
    </div>
  );
}
export default App;