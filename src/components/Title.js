import React from 'react'
import logo from "/assets/img/foodvilla.png";
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <Link to="/" className="logo-head">
      <img src={logo} alt="img" className="logo" />;
    </Link>
  );
}

export default Title;