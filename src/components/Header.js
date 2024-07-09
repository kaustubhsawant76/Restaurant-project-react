
import myImage from "../download (19).png";
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                 <img className="logo" src={myImage} height="100px" width="100px"/>    {/*img can also uploaded by <img src=""/>  src=link of the image */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


export default Header;