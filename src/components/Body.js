import React, { useState, lazy, Suspense } from "react";
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
      <div className="py-8 flex justify-center">
        <input
          type="text"
          className="bg-red-300 rounded-md mr-5 p-1 focus:outline-none text-zinc-950 placeholder-slate-800"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="bg-black text-white rounded-md p-3 hover:bg-slate-600"
          onClick={() => {
            const data = filterData(searchInput, allRestraunt);
            setFilteredRestraunt(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list flex flex-wrap w-[100%]  justify-center">
        {filteredRestraunt.map((item) => {
          return (
            <Link to={"/restraunt/" + item?.id} key={item?.id}>
              <Suspense fallback={<Shimmer />}>
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
