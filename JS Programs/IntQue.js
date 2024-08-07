//**glob logic**1st round

//Find Intersection of Arrays : Write a function that takes two arrays as input and returns an array containing the intersection of the two arrays (elements that appear in both arrays).
//Eg: Input: arr1 = [1,3, 10,10,2], arr2 = [4,10,1,5,6,7], Output: arr= [1, 10]
let arr1 = [1,3, 10,10,2]
let arr2 = [4,10,1,5,6,7]
function intersection(arr1, arr2){
    let arr=[];
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            arr.push(arr1[i])
        }
    }
    return arr;
}
console.log(intersection(arr1, arr2))

//Complete the function reverseString(), which accepts a string as its parameter, reverses it, and returns the string.
//Note - Do not use any loop in implementation

function reverseString(str){
    let revStr = str.split("").reverse().join("");
    console.log(revStr)
}
reverseString("Hi there")

//Write a function in a programming language of your choice that takes an integer as input and returns the count of even digits in the number. 
//Input: 24680, Output: 5; Input: 13579, Output: 0
function countEven(input) {
    let count = 0;
    const str = input.toString(); 
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) % 2 === 0) { 
            count++;
        }
    }
    return count;
}
console.log(countEven(24680)); // Output: 5

//Output base
//
console.log(j); //10
Demo();
function Demo() {
   console.log(i); //output undefined
   var i = 20;
}
var j = 10;
//
function demo() {
    let a = 10;
    const b = 11;
    var c = 12;
  }
  demo()
  console.log(a) //will stop here with error: ReferenceError: a is not defined
  console.log(b) 
  console.log(c) 

//**glob logic**2nd round
const input = [1.1, 1.3, 2.1, 2.5, 2.7, 4.1];
const output = {};

for (let i = 0; i < input.length; i++) {
    const num = input[i];
    const key = Math.floor(num);
    if (!output[key]) {
      output[key] = [];
    }
    output[key].push(num);
  }
  

console.log(output);   // {1:[1.1,1.3], 2:[2.1,2.5,2.7], 4:[4.1]}

/* Quest global*/
// ensure that the handleClick function in the Parent component is called when the button in the Child component is clicked, 
// you need to pass the handleClick function correctly as a prop to the Child component and use it properly in the Child component.

//parent
import React from 'react';
import Child from './Child';
function Parent() {
    let message = 'Hi user';

    const handleClick = () => {
        console.log(message); // Corrected to log the message variable
    };

    return (
        <Child handleClick={handleClick} />
    );
}

export default Parent;

//child
import React from 'react';

function Child({ handleClick }) { // Destructured to get handleClick from props
    return (
        <button onClick={handleClick}>Click Here</button>
    );
}

export default Child;

//adeption.io
//countdown of a input number till 0 by 1 second interval
import React, { useState, useEffect } from "react";

function Countdown() {
  const [inputNumber, setInputNumber] = useState(0);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    let timer = setInterval(() => {
        setNumber((prevNumber) => prevNumber - 1);
      }, 1000);

    return () => clearInterval(timer);
  }, [number]);

  const handleInputChange = (e) => {
    setInputNumber(Number(e.target.value));
  };

  const startCountdown = () => {
    setNumber(inputNumber);
  };

  return (
    <div>
      <input
        type="number"
        value={inputNumber}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={startCountdown}>Start Countdown</button>
      <h1>
        Countdown:{" "}
        { number}
      </h1>
    </div>
  );
}

export default Countdown;

//innoplexus* merging the two arrays, sorting them, and then accessing the nth maximum number.
const arr1 = [5, 17, 22, 39, 45, 55];
const arr2 = [33, 22, 39, 55, 9];

function getNthMax(arr1, arr2, n) {
  const mergedArray = [...arr1, ...arr2];
  const uniqueSortedArray = [...new Set(mergedArray)].sort((a, b) => b - a);
  return uniqueSortedArray[n - 1];
}

const n = 1; // For the maximum value
console.log(getNthMax(arr1, arr2, n)); // Output: 55

//Deloitte  1st round
//Count dupl from arr
let array= [1, 1, 3, 4, 5, 6, 6, 7]
function getDuplValues(arr){
let dupl = {};
for(i=0; i<arr.length; i++){
let item = arr[i]
if(dupl[item]){
	dupl[item]= dupl[item]+1;
}
else{
	dupl[item] = 1;
}
}
return dupl;
}
console.log(getDuplValues(array))
//Destructure
let arr = ['520', 'test', 'test12', 'test123']
const [first, second, third, fourth] = arr;
console.log(first)

//Focus on Input element on page load react
import {useEffect, useRef} from 'react';
function App(){
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    }, []);
    return <input type="text" ref={inputRef} />;
}

//Deloitte  2nd round
//write a code for passing value using useContext

import { useContext, createContext, useState } from "react";

const EgContext = createContext();

export default function App() {
  const [user, setUser] = useState("Harsh");

  return (
    <EgContext.Provider value={user}>
      <h1>I'm the parent</h1>
      <Child1 />
    </EgContext.Provider>
  );
}

function Child1() {
  return (
    <>
      <h1>I'm child 1</h1>
      <Child2 />
    </>
  );
}

function Child2() {
  const user = useContext(EgContext);

  return (
    <>
      <h1>I'm child 2 calling parent data</h1>
      <p>{user}</p>
    </>
  );
}


// Mphasis 1st round
//write a code for checking anagram without sort
function areAnagrams(str1, str2) {
 
  const buildCharCount = (str) => {
    const charCount = {};
    for (let char of str.toLowerCase()) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  };

  const charCount1 = buildCharCount(str1);
  const charCount2 = buildCharCount(str2);

  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

const string1 = "army";
const string2 = "mary";

console.log(areAnagrams(string1, string2)); // true

//CitiusTech 1st
//check repeatative chars 
function checkVal(str) {
  let strArr = str.split("");
  for (let i = 0; i < strArr.length - 1; i++) {
    if (strArr[i] === strArr[i + 1]) {
      return false;
    }
  }
  return true;
}

let str1 = 'abba'; // false
let str2 = 'kapil'; // true

console.log(checkVal(str1)); // false
console.log(checkVal(str2)); // true

//Securview 2nd Cisco
//2nd highest num from array without inbuild method
function secondHighest(arr) {
  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      secondHighest = highest;
      highest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }

  return secondHighest;
}
let arr = [5, 3, 9, 1, 6, 7];
console.log(secondHighest(arr)); // Output: 7

//spanidea 1st round
// create simple todo in react
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]); 

  function handleAdd() {
    setList([...list, name]); 
    setName(""); 
  }

  function handleDelete(indexToDelete) {
    setList(list.filter((_, index) => index !== indexToDelete)); 
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map(
          (
            val,
            index
          ) => (
            <li key={index}>
              {val} <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

//virtusa 1st round
let string ="school";
let strA = string.split('')

function countRepeate(str){
	let count = {}
  for (let i=0; i<str.length; i++){
  let item=str[i]
  if(count[item]){
  	count[item]++;
  }
  else{
  	count[item]=1;
  }
  }
return count;
}
console.log(countRepeate(strA))
console.log(strA)

//**Neosoft 2nd --Distinct values only
const array = [1, 1, 2, 2, 3, 4];
function distinctValues(array) {
  let frequency = {};
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
      result.push(item);
    }
  }
  result = result.filter(item => frequency[item] === 1);
  return result;
}
console.log(distinctValues(array)); // Output: [3, 4]

//LTI 2nd 
//palindrome without reverse
function ispalindrome(str){
  let left =0;
  let right = str.length-1;
  while(left<right){
    if(str[left] != str[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

//currying for multiply
function multiply(a) {
  return function(b) {
    return function(c) {
    return a * b *c;
    }
    }
    multiply(2,3,4)

//Zimetrics 2nd - form data post request
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    handleForm();
  }, []);

  function handleForm() {
    console.log(fname);
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "POST",
      header: {
        "Content-Type": "body/json",
      },
      body: JSON.stringify({
        fname: "FirstName",
        lname: "LastName",
        email: "UserEmail",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="App">
      <label>
        First Name:
        <input
          type="text"
          placeholder="name"
          value={fname}
          onChange={(e) => setfName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          placeholder="name"
          value={lname}
          onChange={(e) => setlName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleForm}>Register</button>
    </div>
  );
}

//LTI MIndtree 2nd round
//return promise wit 50% resolve and 50% reject probabilty
function randomPromise() {
  return new Promise((resolve, reject) => {
    let random = Math.random();
    if (random < 0.5) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}
function executePromises() {
  for (let i = 0; i < 4; i++) {
    randomPromise()
      .then((message) => {
        console.log(message);
        
      })
      .catch((message) => {
        console.log(message);   
      });
  }
}
executePromises();

//Leapfrog 1st**
//filter using search input api response
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((resp) => resp.json())
      .then((data) => setUserData(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value);
  }
  
  const filteredTitle = userData.filter(item => item.title.includes(search));
  
  return (
    <div className="App">
      <input type="text" onChange={handleSearch} />
      <ul>
        {filteredTitle.map((val) => (
          <li key={val.id}>{val.title}</li>
        ))}
      </ul>
    </div>
  );
}
