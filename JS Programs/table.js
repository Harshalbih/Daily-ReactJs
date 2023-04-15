//Write table of user input value
let input = parseInt(prompt("Enter number"))
const table = (input)=>{
    for (let i=1; i<=10; i++){
       let result = input*i;
        console.log(`${input} x ${i}=${result}`)
    }
}
table(input);