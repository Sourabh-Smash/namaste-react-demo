import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
const RestrauntMenu = () => {
  const param = useParams();
  // con sole.log(param.id )
  const [restrauntMenu, setRestrauntMenu] = useState(null);
  useEffect(() => {
    getRestrauntMenu();
  }, []);
  async function getRestrauntMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.5582034&lng=73.7139503&restaurantId=${param.id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json?.data?.cards[0]?.card?.card?.info?.sla);
    setRestrauntMenu(json?.data?.cards[0]?.card?.card?.info);
  }
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
