import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/img/foodvilla.png";

const Title = () => {
  return (
    <a href="/" className="logo-head">
      <img src={logo} alt="img" className="logo" />;
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = () => {
  return (
    <div className="card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9ec9ffd900c24ef751e2f34ba3d2fd4b"
        alt="pizza"
      />
      <h2>Pizza</h2>
      <h3>snack</h3>
    </div>
  );
};

const Body = () => {
  return <RestrauntCard/>;
};
const Footer = () => {
  return <h2>footer</h2>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
