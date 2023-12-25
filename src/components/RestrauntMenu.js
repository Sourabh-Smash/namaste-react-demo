import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
const RestrauntMenu = () => {
  const {id} = useParams();
  const restrauntMenu = useRestrauntMenu(id);
  
  return (!restrauntMenu)?<Shimmer/>: (
    <>
      <h1>RestrauntMenu</h1>
      <h3>Restaunt name :{restrauntMenu.name}</h3>
      <h3>Restaunt name :{restrauntMenu.id}</h3>
      <h3>Restaunt name :{restrauntMenu.city}</h3>
      <h3>Restaunt name :{restrauntMenu.locality}</h3>
      <img src={IMG_CDN_URL + restrauntMenu.cloudinaryImageId} />
      <h2>Restaunt Information</h2>
      {/* {console.log(Object.values(restrauntMenu.sla))} */}
      {/* <div className="info">
        <ul>
           {Object.values(restrauntMenu.sla).map((item, idx) => (
            <li key={idx}> {item}</li>
          ))}
        </ul>
      </div>  */}
    </>
  );
};

export default RestrauntMenu;
