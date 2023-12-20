import React from "react";
import { IMG_CDN_URL } from "../Constant";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="pizza" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestrauntCard;
