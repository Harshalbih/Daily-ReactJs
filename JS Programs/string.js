//Reverse string with predefined methods
let str = "Harshal";
let splitstr = str.split("");
let reversestr = splitstr.reverse();
let joinstr = reversestr.join("");
console.log(joinstr);

let str1 = "hubli";
let rev = str1.split("").reverse().join("");
console.log(rev);

//Reverse using for loop
let str = prompt("enter string");

let newstring = "";
for (let i = str.length - 1; i >= 0; i--) {
  newstring += str[i];
}
console.log(newstring);

//Check if two string match with string chars
let str1= "harshal";
let str2 = "ahshral";

function strmatch(val1, val2){
  let arr1= val1.split("").sort().join("")
  let arr2= val2.split("").sort().join("")
  if (arr1===arr2) return true
  else return false;
}
strmatch(str1, str2);

//check count of repeated elements in array
let arr= ["aa", "bb", "cc", "aa", "bb"];

let obj ={};
for(let i =0; i<arr.length;i++){
  let item = arr[i];
  if(obj[item]){
    obj[item]= obj[item]+1;
  }else{
    obj[item]=1;
  }
}
console.log(obj);

//Make first string uppercase
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//To remove specific character
let str1 = "hubli hi";
console.log(str1.substring(4,str1.length)) //will remove first four chars 
console.log(str1.substring(str1.length-2)) //to remove last chars

//Type Coercion

let string = '44';
let num = 44;
let boolean = true;
console.log(string+num); //4444
console.log(boolean+num); //43