import React, { useEffect, useState } from "react";
import { restrauntList } from "../Constant";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(sInput, Restraunt) {
  return Restraunt.filter((rest) =>
    rest?.name.toUpperCase().includes(sInput.toUpperCase())
  );
}
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [allRestraunt, setAllRestraunt] = useState([]);
  const [restrauntData, setRestrauntData] = useState([]);

  useEffect(() => {
    getSwiggyData();
  }, []);

  async function getSwiggyData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.5582034&lng=73.7139503&collection=90964&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
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
  if (!allRestraunt) return null;
  // if (filteredRestraunt.length === 0) {
  //   return <h1>No resta found</h1>;
  // }
  return allRestraunt?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, allRestraunt);
            setFilteredRestraunt(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {filteredRestraunt.map((item) => {
          return (
            <Link to={"/restraunt/" + item?.id} key={item?.id}>
              <RestrauntCard {...item} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
