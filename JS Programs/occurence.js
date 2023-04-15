//Find occurence of letter in string

let string = prompt("Enter string");
let letter = prompt("Enter letter to count");
let count = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] == letter) {
    count++;
  }
}
console.log(`In ${string} occurence of letter ${letter} is ${count} times`);
