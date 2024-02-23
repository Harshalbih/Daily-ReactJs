const num= prompt("enter number");
for (let i=0; i<=num; i++){
    if(num%i==0){
        console.log(i);
    }
}

//unique way
function factorial(number) { 

    if (number === 0 || number === 1) { 
  
      return 1; 
  
    } else { 
  
      return number * factorial(number – 1); 
  
    } 
  
  } 