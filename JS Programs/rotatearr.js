//rotate element from last for n times
let arr = [5,4,3,2,1,7];
n=4;

function rotate(array, num){
    for(let i=0; i<num; i++){
        let removed = array.pop();
        array.unshift(removed);
        console.log(array);
    }
}
rotate(arr, n)