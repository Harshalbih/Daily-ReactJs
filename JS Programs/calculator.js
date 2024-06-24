let num1 = parseFloat(prompt("Enter first number"));
let operator = prompt("Select operator from +-*/");
let num2 = parseFloat(prompt("Enter second number"));

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else {
  result = num1 / num2;
}
console.log(`${num1} ${operator} ${num2} = ${result}`);
