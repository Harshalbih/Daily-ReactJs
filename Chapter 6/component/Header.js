import { useState } from "react";

const Header = () => {
  //Don't write useState or hooks inside if..else.. statement to avoid inconsistency.
  const [isLogged, setIsLogged] = useState(false);

    return (
      <div className="navbar">
        <a href="/">
          <img
            src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63bec2840aae54534596e928_Screen%20Shot%202023-01-11%20at%208.20.24%20PM.png"
            className="logo"
            alt="LOGO"
          />
        </a>
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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