import React, { useState,useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const {user} = useContext(UserContext);
  console.log(user.name);
  return (
    <div className="flex items-center justify-between pr-20 bg-pink-50 shadow-lg sm:bg-pink-50md:bg-pink-50">
      <Title />
      <span>{user.name}</span>
      <span>{user.email}</span>
      <div>
        <ul className="flex py-10">
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-5">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-5">Cart</li>
          {isLoggedIn ? (
            <li>
              <button onClick={() => setLoggedIn(false)}>Logout</button>
            </li>
          ) : (
            <li>
              <button onClick={() => setLoggedIn(true)}>Login</button>{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
