
const RestaurantCategories= ({data})=>{
 console.log(data);
 
    return(
      <div>
        {/* Header  */}
        <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 flex justify-between ">
            <span>{data.title}</span>
            <span>⬇</span>
        </div>
        {/* Accordion Body */}
      </div>  
    );

}


export default RestaurantCategories;