import myImage from "../download (19).png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [values,setValue1]=useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={myImage} height="100px" width="100px" />
    
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
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
