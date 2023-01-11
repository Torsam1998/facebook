import React from "react";
import { Routes,Route } from "react-router-dom";
import About from "./components/About";
import Article from "./components/Article";
 
import Home from "./components/Home";
import Publish from "./components/Publish";
 
function App(){
    return(
        <div>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/article" element={<Article/>} />
            <Route exact path="/publish" element={<Publish/>} />
        </Routes>
           
        </div>
    )    
}
export default App