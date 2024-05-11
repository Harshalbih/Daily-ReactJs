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

  
  //Tricky question
  function sum(num1, num2){
    "use strict"
    num1=100;
    num2=200;
    return arguments[0]+arguments[1];
  }
  sum(10,10);
  //output 20 /// it would be 300 if we don't add usestrict because params will overrider arguments in js