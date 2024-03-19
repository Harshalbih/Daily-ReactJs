//useFetch.js
import React from "react";
import { useState, useEffect } from "react";

const fetchurl = (url) =>{
    const [data, setData] =useState(null);

    useEffect (() =>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=> setData(data));
    },[url]);
    return [data];
}
export default fetchurl; 

//index.js
import useFetch from "./useFetch";

const Home =() =>{
    const data =useFetch{"https://jsonplaceholder.typicode.com"};

    return(
        <>
        {data &&
            data.map((item) =>{
                return <p>{item.title}</p>
            })}
        </>
    )
}