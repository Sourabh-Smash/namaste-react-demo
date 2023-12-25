import React, { useState, lazy, Suspense } from "react";
// import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useRestraunt from "../utils/useRestraunt";
import useOnline from "../utils/useOnline";

const RestrauntCard = lazy(() => import("./RestrauntCard"));
const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const [allRestraunt, filteredRestraunt, setFilteredRestraunt] =
    useRestraunt();

  const isOnline = useOnline();
  // console.log(isOnline);
  // if (!isOnline) {
  //   return <h1>You are offline</h1>;
  // }
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
              <Suspense fallback={<Shimmer/>}>
                <RestrauntCard {...item} />
              </Suspense>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
