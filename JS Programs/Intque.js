//**glob logic**

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
console.log(j);
Demo();
function Demo() {
   console.log(i);
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
  console.log(a) 
  console.log(b) 
  console.log(c) 
