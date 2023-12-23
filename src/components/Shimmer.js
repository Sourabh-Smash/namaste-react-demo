import React from "react";

const Shimmer = () => {
  return (
    <div className="restraunt-list">
      {Array(10)
        .fill("")
        .map((e, idx) => (
          <div key={idx} className="shimmer_card"></div>
        ))}
    </div>
  );
}; 

export default Shimmer;
