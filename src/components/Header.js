import React, { useState } from "react";
import Title from "./Title";
function loginUser() {
  return true;
}
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul> 
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {isLoggedIn ? <button onClick={()=> setLoggedIn(false)}>Logout</button> : <button onClick={()=> setLoggedIn(true)}>Login</button>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
