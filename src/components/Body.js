import React, { useState } from "react";
import { restrauntList } from "../Constant";
import RestrauntCard from "./RestrauntCard";

function filterData(sInput, Restraunt) {
  return Restraunt.filter((rest) =>
    rest.info.name.toUpperCase().includes(sInput.toUpperCase())
  );
}
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [Restraunt, setRestraunt] = useState(restrauntList);
  return (
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
            if (searchInput === "") {
              setRestraunt(restrauntList);
            } else {
              const data = filterData(searchInput, Restraunt);
              setRestraunt(data);
            }
            setSearchInput("");
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {Restraunt.map((item) => {
          return <RestrauntCard {...item.info} key={item.info?.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
