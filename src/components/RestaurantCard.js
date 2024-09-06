import { CDN_URL } from "../../utils/constants"; //named import
import { LazyLoadImage } from "react-lazy-load-image-component";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="m-4 p-4 w-[250px] h-[510px] rounded-lg text-wrap bg-gray-200 hover:bg-gray-300 hover:border border-black  "
    //  style={{ backgroundColor: "#f0f0f0" }}
     >
     <LazyLoadImage className=" rounded-lg" src={CDN_URL + cloudinaryImageId}
        
      />
      {/* <img className="image" src={CDN_URL + cloudinaryImageId} loading="Lazy" /> */}
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-wrap">{cuisines.join(" , ")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
