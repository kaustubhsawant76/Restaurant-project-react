import myImage from "../../foodapplogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/Hooks/useOnlineStatus";

const Header = () => {

  const [values,setValue1]=useState("login");
  const onlineStatus=useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 h-24 sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-40 h-24" src={myImage}  />
    
      </div>
      <div className="flex items-center">
        <ul className="flex p-7 m-7 space-x-6 " >
         <li>Online Status:{onlineStatus ? "✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
         <li> <button className="button"
           onClick={()=>{
            values==="login"?
            setValue1("logout"):
            setValue1("login")
          }}
          >{values}</button> </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
