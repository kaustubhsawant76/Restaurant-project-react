//import myImage from "../../public/foodapplogo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/Hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

  const [values,setValue1]=useState("login");
  const onlineStatus=useOnlineStatus();
  const data=useContext(UserContext);
  //console.log(data);
  
  //Selector is a hook 
  //Subscribing to the store using selector
  const cartItems =useSelector((store) => store.cart.dishes);
  const imageUrl = new URL('../../public/foodapplogo.png', import.meta.url).href;

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 h-24 sm:bg-yellow-50  lg:bg-green-50">
      <div className="logo-container">
      {/* <img  src={new URL('../../public/foodapplogo.png', import.meta.url)} alt="App Logo" className="w-40 h-24" /> */}
         {/* <img className="w-40 h-24  " src={myImage} />  */}
          <img className="w-40 h-24  " src={imageUrl} /> 
    
      </div>
      <div className="flex items-center ">
        <ul className="flex p-7 m-7 space-x-6 " >
         <li>Online Status:{onlineStatus ? "✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className=" text-lg"><Link to="/cart">Cart ({cartItems.length} Items)</Link></li>
         <li> <button className="button"
           onClick={()=>{
            values==="login"?
            setValue1("logout"):
            setValue1("login")
          }}
          >{values}</button> </li>
          <li className=" text-lg">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
