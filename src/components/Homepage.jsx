
import React from "react";
import picture from "../assets/city.jpg";
 
function Homepage(){
    return(
        <div className="picture">
       <img src={picture} alt="city" />
       <div className="text__overlay">
            <h1 className="text__h1"> Stay tune for more of our latestNews</h1>
       </div>
        </div>
    )    
}
export default Homepage
