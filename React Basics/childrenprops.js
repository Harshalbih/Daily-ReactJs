export function App(){
    return (
        <div className="App">
            <h1>Hello</h1>
            <Tabbtn>Menu1</Tabbtn>
            <Tabbtn>Menu2</Tabbtn>
            <Tabbtn>Menu3</Tabbtn>
        </div>
    )
}

export function Tabbtn(props){
    return (
        <li><button>{props.children}</button></li>
    )
}
//or
export function Tabbtn({ children }) {
    return <button>{children}</button>;
  }