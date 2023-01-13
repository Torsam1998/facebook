import React from 'react'
import  {data} from './database.jsx'
import { useParams,Link } from 'react-router-dom'
import './newsdetail.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Newsdetail() {
    let {id}=useParams();
    const aku = data.find(p1=>p1.id===id)
   
  return (
    <>
    <Header/>
   <div className="background">
    
    <div className='news_detail'>
       <div className="news__image">
       <img src={aku.image} alt="" />
       </div>
        <p>{aku.p1}</p>
        <Link to={"/"}>
        <button> Read More</button> 
        </Link>
        
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Newsdetail