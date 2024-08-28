import { useState,useEffect } from "react";
import { MENU_API } from "../constants";

const useRestaurantMenu=(resId)=>{
const [resInfo,setResInfo]=useState(null);

useEffect(()=>{
    fetchData();
},[]);

const fetchData=async ()=>{
    const data=await fetch(MENU_API+ resId);
    const json=await data.json();
    setResInfo(json.data)
    console.log(json?.data);
    console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);
};
return resInfo;
};

export default useRestaurantMenu;