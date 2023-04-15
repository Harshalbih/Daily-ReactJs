//Swap variables using third var
let a = prompt("Enter first var");
let b = prompt("Enter second var");

let temp;
temp = a;
a = b;
b = temp;

console.log(`Swapped value of a is ${b}`);
console.log(`Swapped value of b is ${a}`);

//without 3rd var
let a = prompt("Enter first var");
let b = prompt("Enter second var");
[a, b] = [b, a];
console.log(a);
console.log(b);

//Least num
function min(a, b) {
  return a < b ? a : b;
}
