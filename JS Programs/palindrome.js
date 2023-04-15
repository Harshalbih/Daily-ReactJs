let palindrome = prompt("Enter Value")
palindrome = palindrome.toLowerCase();

let findpal= (str)=>{
    let reversestr= str.split("").reverse().join("")
    if(str===reversestr){
        return true
    }else{
        return false;
    }

}
console.log(findpal(palindrome))