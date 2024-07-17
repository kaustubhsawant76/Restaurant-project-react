
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockdata";//use mockdata when live api is not used
import { useState,useEffect } from "react";



const Body = () => {
  const [resData,setRestlist]=useState([]);

  useEffect(
    ()=>{
      
      FetchData();
    },[]
  );

  const FetchData= async ()=>{
        
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json= await data.json();
  //  console.log(json);
   setRestlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
   
 };
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList= resData.filter(
               (rest) =>rest.info.avgRating > 4.4
                 
             );
             
             setRestlist(filteredList);
           }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

//hooks are normal javascript utility functions
//hooks are required to make changes in the ui 
//useState()=superpowerful state variables in react
//useEffect()












