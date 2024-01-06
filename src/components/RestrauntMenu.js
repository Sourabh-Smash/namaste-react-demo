import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { restraMenuItems } from "../Constant";

const RestrauntMenu = () => {
  const { id } = useParams();
  const restrauntMenu = useRestrauntMenu(id);
  const dispatch = useDispatch();
  const addToCart = (menuItem) => {
    dispatch(addItem(menuItem)); 
  };
  const removeFromCart = () => {
    dispatch(removeItem());
  };
  return !restrauntMenu ? (
    <Shimmer />
  ) : (
    <div className="flex justify-around">
      <div>
        <h1>RestrauntMenu</h1>
        <h3>Restaunt name :{restrauntMenu.name}</h3>
        <h3>Restaunt name :{restrauntMenu.id}</h3>
        <h3>Restaunt name :{restrauntMenu.city}</h3>
        <h3>Restaunt name :{restrauntMenu.locality}</h3>
        <img
          className="w-52 h-44"
          src={IMG_CDN_URL + restrauntMenu.cloudinaryImageId}
        />
      </div>
      <div className="">
        <h2 className="font-bold text-2xl">Restaunt Menu</h2>
        {/* {console.log(Object.values(restrauntMenu.sla))} */}
        {/* <div className="info">
        <ul>
        {Object.values(restrauntMenu.sla).map((item, idx) => (
          <li key={idx}> {item}</li>
          ))}
          </ul>
        </div>  */}

        <div className="">
          {restraMenuItems.map((item, id) => (
            <li className="list-none my-3" key={id}>
              {item}
              <button
                onClick={()=>addToCart(item)}
                className="mx-3 p-1 rounded-lg bg-green-400"
              >
                + add
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
