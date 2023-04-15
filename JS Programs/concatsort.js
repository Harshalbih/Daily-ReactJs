//Merge two array with spread
const arr=[1,5,10,45]
const arr1=[101,456,78,15]

let result= [...arr,...arr1]
console.log(result)
let sortarray = result.sort(function(x,y){
    return x-y;
})
console.log(sortarray);

//merge two array with concat

const arr2=[1,5,10,45]
const arr3=[101,456,78,15]
 
let merged= arr2.concat(arr3)
let sorted= merged.sort((a,b)=> {
    return a-b;
})
console.log(sorted)