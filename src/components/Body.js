
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockdata";//use mockdata when live api is not used
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";




const Body = () => {
  const [resData,setRestlist]=useState([]);
  const [filteredRes,setFilteredRes]=useState([]);
  const [searchText,setSearchText]=useState("");

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
   setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
 };
  
 //conditional rendering
//  if(resData.length===0){
//   return <Shimmer/>

 //}
 //below we have used single ternary operator for return
  return resData.length===0? <Shimmer/>: (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-btn" value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        />
        <button className="searchbtn"
        onClick={()=>{
          let filteredRestaurant=resData.filter(
            (rest)=>rest.info.name.toLowerCase().includes(searchText.toLowerCase())
            
          );
          setFilteredRes(filteredRestaurant);
          
        }}
        >Search</button>
      </div>
      
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList= resData.filter(
               (rest) =>rest.info.avgRating > 4.4
                 
             );
             
             setFilteredRes(filteredList);
           }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRes.map((restaurant) => (
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
//whenever state variable updates react triggers a reconcilliation cycle(re-renders the component)
//if there is no dependency array [] in useEffect it is called on every render
//if there is an empty dependency array [] then the useEffect is called only once during initial render
//if dependency name is [btnReact] then the useEffect is called evry time when [btnReact] is updated
//useState hooks should be called only inside component not outside the component
//do not write useState in if else loop 
//for using routing in the project we need to install package by npm i react-router-dom 
//when ever we need to create routes we need to create routing configurations for that we need to import {createBrowserRouter} from react-router-dom
//{createBrowserRouter} will create routing configuration for us and it should be always created in root file that is App.js










