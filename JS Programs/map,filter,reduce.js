// /basic example
const radius = [3,4,5,6]

const area = function (radius){
    return Math.PI*radius*radius;
}
const circumf= function(radius){
    return 2*Math.PI*radius
}

const calcul = function (arr, logic){
    const output = [];
    for (let i=0;i<=arr.length; i++){
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calcul(radius,area));
console.log(calcul(radius,circumf));

//map

let arr=[4,5,6,7];

function double(x){
    return x*x;
}
function binary(x){
    return x.toString(2);
}
const outpdouble = arr.map(double)
console.log (outpdouble);
const tstr = arr.map(binary)
console.log(tstr);

//filter
let array = [3,5,6,7,8]

function odd(x){
    return x%2;
}
function even(x){
    return x%2===0;
}

const isodd = array.filter(odd)
console.log(isodd);
const iseven = array.filter(even)
console.log(iseven);

//reduce
let arr = [4,5,56,6]

const tsum = arr.reduce((acc, red)=>{
    return acc = acc+red;
},0)
console.log(tsum)

//with logic
function findsum(arr){
let sum = 0;
for (let i=0; i<arr.length; i++){
    sum = sum+ arr[i];
}
return sum;
}
console.log(findsum(arr));

//find max num using reduce
let maxarr = [4,5,6,7]

//max num with logic
const arr = [5,6,69,9]

function findmax(arr){
    let max=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max= arr[i];
        }
    }
    return max;
}
console.log(findmax(arr));

//max num with reduce
const arr = [5,6,69,9]

const maxnum = arr.reduce((max,num)=>{
    if(num> max){
        max= num;
    }
    return max;
},0)
console.log(maxnum);


//final example
const user= [
{first: 'harshal', last:'bihade', age:27},
{first: 'donald', last:'trump', age:65},
{first: 'alia', last:'bhatt', age:27}
]

//list of full names
const fullnames= user.map((x)=> x.first +" "+ x.last);
console.log(fullnames);

//first name of people with age less than 30
const name= user.filter((x)=>{ 
    if(x.age<30){
        console.log(x.first)
    }
});

//list of members age with format like {26:2, 65:1}
const output = user.reduce((acc, crr)=>{
    if (acc[crr.age]){
        acc[crr.age]= ++acc[crr.age];
    }
    else{
        acc[crr.age]=1;
    }
    return acc;
},{})
console.log(output);