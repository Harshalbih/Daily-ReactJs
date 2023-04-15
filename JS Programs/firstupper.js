let input = prompt("Enter word or line")
const firstcap=(str)=>{
let newstr = str.split(" ");
let newarr = newstr.map((val)=>{
    return val.charAt(0).toUpperCase() + val.slice(1)
});
return newarr.join(" ")
}
console.log(firstcap(input));
