import { useState } from "react";
import Itemslist from "./ItemsList";

const RestaurantCategories= ({data,showItems,setShowIndex})=>{
   
    //uncontrolled component
  //  const [showItems,setShowItems]=useState(false);
 //console.log(data);
 const handleClick=()=>{
//console.log("clicked");
setShowIndex();

//setShowItems(!showItems);

 };
 
    return(
      <div>
        {/* Header  */}
        <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow-lg p-4  ">
         <div className="flex justify-between cursor-pointer" onClick={handleClick} >
         <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇</span>
            
         </div>
       {showItems &&  <Itemslist items={data.itemCards}/>}
        </div>
        {/* Accordion Body */}
        
      </div>  
    );

}


export default RestaurantCategories;