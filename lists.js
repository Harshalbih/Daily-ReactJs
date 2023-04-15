//render all of the cars from our garage:

function Car (props){
    return <li> Hey I'm car of a brand {props.brand}</li>
}

function Garage(){
    const cars=["lambo", "audi", "bmw"];
    return (
        <>
        <ul>
            {cars.map((car) => <Car brand={car} />)}
        </ul>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

//Keyssssssss
function car (props){
    return <li> Hey I'm car of a brand {props.brand}</li>
}

function Garage(){
    const cars= 
        [
            {id:1, brand:'ford'},
            {id:2, brand:'audi'},
            {id:3, brand:'lambo'}
        ]
    
    return (
        <>
        <ul>
            {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
