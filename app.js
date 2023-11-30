
import React from "react";
import ReactDOM from "react-dom/client";
 
const heading = React.createElement("h1", {}, "Sourabh");
console.log(heading);

const heading2 = <h1>Sourabh ji</h1>;
console.log(heading2);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(heading);
 