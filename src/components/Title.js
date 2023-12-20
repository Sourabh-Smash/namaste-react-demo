import React from 'react'
import logo from "/assets/img/foodvilla.png";

const Title = () => {
  return (
    <a href="/" className="logo-head">
      <img src={logo} alt="img" className="logo" />;
    </a>
  );
}

export default Title;