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

const restrauntList = [
  {
    name: "Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9ec9ffd900c24ef751e2f34ba3d2fd4b",
    cusine: ["pizza", "burger", "pasta"],
    rating: "4.2",
  },
  {
    name: "Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9ec9ffd900c24ef751e2f34ba3d2fd4b",
    cusine: ["pizza", "burger", "pasta"],
    rating: "4.2",
  },
  {
    name: "Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9ec9ffd900c24ef751e2f34ba3d2fd4b",
    cusine: ["pizza", "burger", "pasta"],
    rating: "4.2",
  },
  {
    name: "Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9ec9ffd900c24ef751e2f34ba3d2fd4b",
    cusine: ["pizza", "burger", "pasta"],
    rating: "4.2",
  },
];
const RestrauntCard = () => {
  const { image, name, cusine, rating } = restrauntList;
  return (
    <div className="card">
      <img src={image} alt="pizza" />
      <h2>{name}</h2>
      <h3>{cusine.join(", ")}</h3>
      <h4>{rating} Stars</h4> 
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  );
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
