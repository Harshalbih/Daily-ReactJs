//Component that chooses which component to render based on a condition:

function MissedGoal(){
    return <h1> Missed</h1>
}
function MadeGoal(){
    return <h1> Goal</h1>
}

function Goal(props){
    const isGoal= props.isGoal;

    if(isGoal){
        return <MadeGoal />
    }
    return <MissedGoal />
}


root.render (<Goal isGoal={false} />);

//&& Operator
function Garage(props){
    const cars = props.cars;
    return (
        <>
        <h1>Grage</h1>
        {cars.length > 0 &&
            <h2> you have {cars.length} in garage</h2>
        }
        </>
    )
}
const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<Garage cars={cars} />);

//eg
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0



//Ternary Operator
function MissedGoal(){
    return <h1> Missed</h1>
}
function MadeGoal(){
    return <h1> Goal</h1>
}

function Goal(props){
    const isGoal= props.isGoal;

    return (
        <>
        {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<Goal isGoal={true} />);

