import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"
function Header(){
    return(
        <div className="header">
        <div className="header__content">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                <Link className="link" to={"/"} >
{/* djfjhfj */}
                    <li>Home</li>
                </Link>
                <Link  className="link" to={"/about"}>

                    <li>About</li>
                </Link>
                <Link className="link" to={"/Article"}>

                    <li>Articles</li>
                     
                </Link>
<Link className="link" to={"/publish"}> 
                    <li>Publish</li>
</Link>

                </ul>
            </nav>
        </div>
        
        </div>
    )    
}
export default Header