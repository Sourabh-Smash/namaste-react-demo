import React from "react";
import { useParams } from "react-router-dom";
const RestrauntMenu = () => {
  const param = useParams();
  // console.log(param);
  return (
    <>
      <div>RestrauntMenu</div>
      <h2>Restaunt id :{param.resId}</h2> 
    </>
  );
};

export default RestrauntMenu;
