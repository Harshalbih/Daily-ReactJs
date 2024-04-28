//Merge two arrays and remove duplicate
const mergeArr = (arr1,arr2) => [...new Set([...arr1, ...arr2])];
console.log(mergeArr([1,2,3],[4,2,3]))

//Anagram checker
const isAnagram = (str1, str2) => [...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');
console.log(isAnagram('listen','silent'));

//Shuffle an arrray
const shuffledArr = arr => arr.sort(()=> Math.random() - 0.5);
console.log(shuffledArr([3,5,6,3,2,45,3,2,4]));

//Max number
const maxNum = arr => Math.max(...arr);
console.log(maxNum([98,76,34,21,12]));

//if object is empty
const ifObjEmpt = obj => Object.keys(obj).length === 0;
console.log(ifObjEmpt({}));

//check if all elements in array satisfy condition
const arrElem = (arr, condition) => arr.every(condition);
console.log(arrElem([2,4,3,6], num => num % 2 === 0));

//avg number of arr
const avgNum = arr => arr.reduce((sum, num)=> sum + num, 0)/arr.length;
console.log(avgNum([2,3,4,54,3,22]))

