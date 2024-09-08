import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantMenu";
const RestaurantMenu=()=>{
  
  const{resId}=useParams();

  const resInfo=useRestaurantMenu(resId);

 
  if(resInfo ===null) return <Shimmer/>;
   const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
   //console.log(itemCards);
   //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
    c.card?.["card"]?.["@type"]===  
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   
    );

   console.log(categories);
    
   
   
   
     return (
    
  <div className="text-center">
   <h1 className="font-bold">{ name}</h1> 
   <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
  {/* <h2>Menu</h2>

    <ol>
   {
    itemCards.map((item)=>(
     <li key={item.card.info.id}> {item.card.info.name} - {(item.card.info.price)/100} RS</li>
    ))
   }
    
    </ol>  */}
   
  </div>
    )
}


export default RestaurantMenu;