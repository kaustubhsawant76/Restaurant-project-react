import { useEffect,useState } from "react";
import { MENU_API } from "../../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
const RestaurantMenu=()=>{
  const[resInfo,setResInfo]=useState(null);
  const{resId}=useParams();

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu= async ()=>{
    const data=await fetch(MENU_API+resId);
 const json=await data.json();
 console.log(json);
 setResInfo(json.data);
 console.log(json?.data);
 console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);
 
  };
  if(resInfo ===null) return <Shimmer/>;
   const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
   console.log(itemCards);
   
   
     return (
    
  <div className="menu">
   <h1>{ name}</h1> 
   <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
  <h2>Menu</h2>

    <ol>
   {
    itemCards.map((item)=>(
     <li key={item.card.info.id}> {item.card.info.name} - {(item.card.info.price)/100} RS</li>
    ))
   }
    
    </ol> 
   
  </div>
    )
}


export default RestaurantMenu;