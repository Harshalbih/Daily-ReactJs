//find min and max value sum
let arr = [12,15,7]
function minmax(arr){
    let sum = arr.reduce((a,b)=> a+b)

    var max= sum- Math.max(...arr);
    var min = sum - Math.min(...arr);
    console.log(max +" "+ min);
}
minmax(arr);