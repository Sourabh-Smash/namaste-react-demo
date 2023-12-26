import React from "react";
import { IMG_CDN_URL } from "../Constant";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-[200px]  p-2 border-slate-900 border-2 rounded-md mx-2 shadow-lg bg-pink-100">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="pizza"
        className="h-40 w-56"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="overflow-hidden ">{cuisines + ","}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestrauntCard;
