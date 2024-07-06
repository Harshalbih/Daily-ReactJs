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
