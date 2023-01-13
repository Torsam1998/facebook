import Chatboard from "./Chatboard";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage";
import LatestNews from "./LatestNews";
function Home(){
    return(
        <div className="sam">
            <Header />
            <Homepage />
            <LatestNews />
            <Chatboard />
            <Footer />
        </div>
    )    
}
export default Home
