import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockdata";


const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            resList = resList.filter((res) => {
              res.info?.avgRating > 4;
            });
            console.log(resList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

//hooks are normal javascript utility functions
//hooks are required to make changes in the ui 