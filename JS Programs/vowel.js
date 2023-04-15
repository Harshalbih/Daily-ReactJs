// program to count the number of vowels in a string

const vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {   //for of loops through whole string
    if (vowels.includes(letter)) {
      count++;
    }
  }

  // return number of vowels
  return count;
}

//using for loop
const vowels = ["a", "e", "i", "o", "u"];
function countVowel(str){
  let count =0;
  str = str.toLowerCase();
  for (let i=0; i<str.length;i++){
    if(vowels.includes(str[i])){
      count++;
    }
  }
  return count;
}
console.log(countVowel("harshal"))