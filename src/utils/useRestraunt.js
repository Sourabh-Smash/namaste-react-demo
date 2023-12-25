import React from "react";
import { useEffect, useState } from "react";
import { SWIGGY_RESTRAUNT_API } from "../Constant";

const useRestraunt = () => {
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [allRestraunt, setAllRestraunt] = useState([]);
  const [restrauntData] = useState([]);
  useEffect(() => {
    getSwiggyData();
  }, []);

  async function getSwiggyData() {
    const data = await fetch(SWIGGY_RESTRAUNT_API);
    const json = await data.json();
    const restraList = json?.data?.cards;
    restraList.map((item) => {
      if (item?.card?.card?.info !== undefined) {
        restrauntData.push(item?.card?.card?.info);
      }
    });
    setFilteredRestraunt(restrauntData);
    setAllRestraunt(restrauntData);
  }
    return [allRestraunt, filteredRestraunt, setFilteredRestraunt];
};

export default useRestraunt;
