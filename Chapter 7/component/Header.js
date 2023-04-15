import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //Don't write useState or hooks inside if..else.. statement to avoid inconsistency.
  const [isLogged, setIsLogged] = useState(false);

    return (
      <div className="navbar">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Good_Food.svg/1200px-Good_Food.svg.png"
            className="logo"
            alt="LOGO"
          />
        </a>
        <div className="sidebar">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li>Cart</li>
            <li>{
          (isLogged ? <button className="logout-btn" onClick={()=> setIsLogged(false)}>Log out</button> : 
          <button className="login-btn" onClick={()=> setIsLogged(true)}>Log In</button>)
        }</li>
          </ul>
        </div>
      
      </div>
    );
  };

  export default Header;