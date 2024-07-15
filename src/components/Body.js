
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockdata";
import { useState,useEffect } from "react";



const Body = () => {
  const [resData,setRestlist]=useState(resList);
  useEffect(
    ()=>{
      console.log("useeffect called ");
    },[]
  );
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList= resData.filter(
               (rest) =>rest.info.avgRating > 4
                 
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
//useEffect()=