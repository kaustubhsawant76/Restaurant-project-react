import myImage from "../download (19).png";
import { useState } from "react";
const Header = () => {

  const [values,setValue1]=useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={myImage} height="100px" width="100px" />
    
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="button"
           onClick={()=>{
            values==="login"?
            setValue1("logout"):
            setValue1("login")
          }}
          >{values}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
