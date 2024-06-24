//**setTimeout allows us to run a function once after the interval of time.
    // setTimeout(function, [delay], [arg1optional], [arg2optional], ...) 

const setTimer = setTimeout(()=>{
    alert("Hi settimeout")
},2000)

//with arguments
function setarg(name, age) {
    alert(name +',' +age)
}
setTimeout(setarg, 3000, "Harshal", 27)

//cancelling setTimeout 
const setTimerClear = setTimeout(()=>{
    alert("Hi settimeout cleared will never happen")
},2000)
clearTimeout(setTimerClear);

//**setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
    // setInterval(function, [delay], [arg1optional], [arg2optional], ...) 

    // repeat with the interval of 2 seconds
let timerId = setInterval(() => 
    alert('tick'), 
2000);

// after 6 seconds stop
setTimeout(() => {
     clearInterval(timerId); 
     alert('stop'); 
}, 6000);