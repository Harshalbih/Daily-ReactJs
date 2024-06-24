       //Debouncing
//**Define the debounce function
function debounce(func, delay) { 
    let timer; 
    return function() { 
        clearTimeout(timer); 
        timer = setTimeout(func, delay); 
    }; 
}
// Example function to be debounced
function myFunction() {
    console.log('Executing debounced function...');
}
// Debounce the function with a delay of 500 milliseconds
const debouncedFunction = debounce(myFunction, 500);
// Call the debounced function
debouncedFunction();
console.log

//debounce using loadash 
const btn= document.querySelector(".increment-btn")
const btnpress= document.querySelector(".increment-press")
const count= document.querySelector(".increment-count")

var pressedCount=0;
var triggerCount=0;

const debouncedCount = _.debounce(()=>{
  count.innerHTML = ++triggerCount
},800)

btn.addEventListener("click", ()=>{
  btnpress.innerHTML = ++pressedCount;
  debouncedCount()
});

//HTML for both
<div>
  <div>
    <button class="increment-btn">Increment</button>
    <button class="increment-pressed">Pressed</button>
    <p class="increment-count">0</p>
  </div>
</div>
//<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

//throttle using loadash
const btn= document.querySelector(".increment-btn")
const btnpress= document.querySelector(".increment-pressed")
const count= document.querySelector(".increment-count")

var pressedCount=0;
var triggerCount=0;

const thottleCount = _.throttle(()=>{
  count.innerHTML = ++triggerCount
},800)

btn.addEventListener("click", ()=>{
  btnpress.innerHTML = ++pressedCount;
  thottleCount()
});

//**Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  // Example usage
  const originalObj = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    },
    hobbies: ["reading", "traveling"]
  };
  const clonedObj = deepClone(originalObj);
  // Modifying the cloned object
  clonedObj.name = "Alice";
  clonedObj.address.city = "Los Angeles";
  clonedObj.hobbies.push("painting");
  console.log("Original Object:", originalObj);
  console.log("Cloned Object:", clonedObj);
  delete originalObj.age; //deletes age from obj

  
  //Tricky question
  function sum(num1, num2){
    "use strict"
    num1=100;
    num2=200;
    return arguments[0]+arguments[1];
  }
  sum(10,10);
  //output 20 /// it would be 300 if we don't add usestrict because params will overrider arguments in js

  //For of vs For in
const array = [1,2,3,4,5]
array.six = 6
array.seven = 7
//This array will now look like [1,2,3,4,5,six:6,seven:7]
// OF: iterates over values
for (const value of array ) {   
  console.log(value)
}
// Logs:
// 1
// 2
// 3
// 4
// 5
const string = 'string'
for (const letter of string) {
  console.log(letter)
}
// 's'
// 't'
// 'r'
// 'i'
// 'n'
// 'g'

// IN: iterates over keys
for (const key in array ) {
  console.log(key, array[key])
}
// Logs:
// '0' 1
// '1' 2
// '2' 3
// '3' 4
// '4' 5
// 'six' 6
// 'seven' 7

