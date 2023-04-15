let number = parseInt(prompt("Enter a number"));
let n = 0;
let n1 = 1;
let num;

function fibo() {
  for (let i = 0; i <= number; i++) {
    console.log(n1);
    num = n + n1;
    n = n1;
    n1 = num;
  }
}
console.log(fibo());
