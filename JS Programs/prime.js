var num = prompt("Enter number");
if (num == 1) {
  console.log(" 1 is not a prime number");
} else if (num < 1) {
  console.log(`${num} is invalid`);
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      var result = `${num} is not a prime number`;
      break;
    } else {
      var result = "Its a prime number";
    }
  }
  console.log(result);
}
