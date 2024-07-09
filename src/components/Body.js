import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockdata";

const Body=()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="restaurant-container">
             {resList.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant} />))}
             
            </div>
        </div>

    );
}










export default Body;