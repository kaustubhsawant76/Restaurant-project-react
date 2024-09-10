import Itemslist from "./ItemsList";

const RestaurantCategories= ({data})=>{
 //console.log(data);
 
    return(
      <div>
        {/* Header  */}
        <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow-lg p-4  ">
         <div className="flex justify-between">
         <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇</span>
            
         </div>
         <Itemslist items={data.itemCards}/>
        </div>
        {/* Accordion Body */}
        
      </div>  
    );

}


export default RestaurantCategories;