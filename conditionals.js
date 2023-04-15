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

const root = ReactDOM.createRoot(document.getElementById('root'));
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

