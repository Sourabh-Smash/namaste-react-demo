import { useState,useEffect } from "react";

const useRestrauntMenu = ( id ) => {
    const [restrauntMenu, setRestrauntMenu] = useState(null);
    console.log(id);
  useEffect(() => {
    getRestrauntMenu();
  }, []);

  async function getRestrauntMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.5582034&lng=73.7139503&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestrauntMenu(json?.data?.cards[0]?.card?.card?.info);
  }
    return restrauntMenu;
};
export default useRestrauntMenu;
