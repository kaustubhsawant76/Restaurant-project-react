import { CDN_URL } from "../../utils/constants"; //named import


const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
