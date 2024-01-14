//Put the shoot function inside the Football component:
function football(){
    const shoot = () =>{
        alert("nice shot")
    }

return (
    <button onClick={shoot}>Take shot</button>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<football />)


//Send "Goal!" as a parameter to the shoot function, using arrow function:
function football(){
    const shoot = (a) =>{
        alert(a)
    }

return (
    <button onClick={() => shoot("Goal")}>Take shot</button>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<football />)

            //events updated
            function focused() {
    var e=document.getElementById('inp');
    if(confirm('Got it?')) {
        e.blur();
    }
}
