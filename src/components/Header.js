import React, { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setLoggedIn(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
