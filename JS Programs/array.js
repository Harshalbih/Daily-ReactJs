//remove duplicate elements from array
const arr = [1, 1, 2, 2, 3, 4];
let dup = [...new Set(arr)];
console.log(dup);    //[1, 2, 3, 4]

//or
const arrayd = [1, 1, 2, 2, 3, 4];
const dupl= arrayd.filter(function (item, pos) {
    return arrayd.indexOf(item) == pos;
  });
console.log(dupl);  //[1, 2, 3, 4]

//or
const array = [1, 1, 2, 2, 3, 4];
function dupl(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
console.log(dupl(array));     //[1, 2, 3, 4]

//Find duplicate items from array
let array = [1, 3, 5, 7, 1, 3, 5, 7, 9];
const dups = array.filter((ele, index, arr) => arr.indexOf(ele) !== index);
console.log(dups); //[1, 3, 5, 7]

//count dups
uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a",'k'];
let count ={};
for(let i =0; i<arr.length;i++){
  let item = arr[i];
  if(count[item]){
    count[item]= count[item]+1;      
  }else{
    count[item]=1;
  }
}
console.log(count);  //{a: 3,b: 2,c: 2,d: 2, e: 2, f: 1, g: 1, h: 3, k: 1}

//Max number in array
let array = [1, 3, 5, 7, 1, 3, 5, 7, 9];
let maxnum = array.reduce((pre, curr) => (curr > pre ? curr : pre));
console.log(maxnum);  //9

//or
let maxnum = Math.max(...array);
console.log(maxnum); //9

//Second largest value in array
let array = [1, 3, 5, 7, 1, 3, 5, 7, 9];
let maxnum = Math.max(...array);
let index = array.indexOf(maxnum);
array.splice(index, 1);
let newmax = Math.max(...array);
console.log(newmax);  //7

//Missing value in an array
let array = [1, 3, 5, 7, 1, 3, 5, 7, 9];
let misarray = [];
let maxnum = Math.max(...array);
let minnum = Math.min(...array);
for (i = minnum; i < maxnum; i++) {
  if (array.indexOf(i) === -1) {
    misarray.push(i);
  }
}
console.log(misarray);    //[2, 4, 6, 8]

//Even odd filter
let array = [1, 2, 4, 3, 5, 7, 1, 3, 5, 7, 9];  
const odd = array.filter((item) => item % 2 === 1);
console.log(odd);                                       //[1, 3, 5, 7, 1, 3, 5, 7, 9]
const even = array.filter((item) => item % 2 === 0);
console.log(even);    //[2, 4]

//sort an array
var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
        }

console.log(Arr);     //[0, 1, 2, 3, 4, 5, 7, 8, 9]


//Intersection of two arrays
let arr1 = [2, 4, 4, 6, 8, 9];
let arr2 = [2, 4, 7, 8, 8, 5];

let intersect = arr1.filter((ele) => {
  return arr2.includes(ele);
});
console.log([...new Set(intersect)]);  //[2, 4, 8]

//Union of array
let arr1 = [2, 4, 4, 6, 8, 9];
let arr2 = [2, 4, 7, 8, 8, 5];

let union = [...arr1, ...arr2];

console.log([...new Set(union)]);  //[2, 4, 6, 8, 9, 7, 5]

//Merge two array with spread
const arr=[1,5,10,45]
const arr1=[101,456,78,15]

let result= [...arr,...arr1]
console.log(result)
let sortarray = result.sort(function(x,y){
    return y-x;  //descending
})
console.log(sortarray);         //[456, 101, 78, 45, 15, 10, 5, 1]

//merge two array with concat
const arr2=[1,5,10,45]
const arr3=[101,456,78,15]
 
let merged= arr2.concat(arr3)
let sorted= merged.sort((a,b)=> {
    return a-b;  //ascending
})
console.log(sorted)   //[1, 5, 10, 15, 45, 78, 101, 456]

//object assign array to object
let a = [1,2,3,4];
let b = ["shubham", "Aniket", "Harshal", "Vipin"]
const assigned = Object.assign(...a.map((sr, name)=>({
                  [sr]:b[name]
})))
console.log(assigned);   // {1: 'shubham', 2: 'Aniket', 3: 'Harshal', 4: 'Vipin'}

//obj to array
let obj = { name: 'John', age: 30, city: 'New York' };
let arr = Object.entries(obj);
console.log(arr);    // [['name', 'John'], ['age', 30], ['city', 'New York']]

//Assign Attribute to obj in arr
let arr=[{id: 1, name:"Test", class:'classobj'}]
let newprop= arr[0].age=27;
console.log(arr)        //[{age: 27,class: "classobj",id: 1,name: "Test"}]


//rotate element from last for n times
let arr = [5,4,3,2,1,7];
n=4;
function rotate(array, num){
    for(let i=0; i<num; i++){
        let removed = array.pop();
        array.unshift(removed);
        
    }
    return array;
}
console.log(rotate(arr, n));    //[3, 2, 1, 7, 5, 4]

//Flattern an array
let array = [1,4,5,[5,9],6,[4,3,2]]

let flatarray = array.flat();
console.log(flatarray)     //[1, 4, 5, 5, 9, 6, 4, 3, 2]
//or 
let flatArray = [].concat(...arr);
console.log(flatArray)     //[1, 4, 5, 5, 9, 6, 4, 3, 2]

//Shuffle an arrray
const shuffledArr = arr => arr.sort(()=> Math.random() - 0.5);
console.log(shuffledArr([3,5,6,3,2,45,3,2,4])); //shuffled

//Empty an array
let arr =[1, 4, 5, 5, 9, 6, 4, 3, 2];
arr.length=0;         //or arr.splice(0, arr.length)
console.log(arr) //[]

//swap variable
let a = prompt("Enter first var");
let b = prompt("Enter second var");
[a, b] = [b, a];
console.log(a);
console.log(b); 