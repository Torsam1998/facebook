import React from 'react'
import News from '../assets/News.jpg'
import  {data} from './database.jsx'
import "./Card.css"
import {Link} from 'react-router-dom'
console.log(data)
function Card() {
  return (
    <>
    {
      data.map(data=>(
        <div className='card'> 
    <img src={data.image} alt="news" />
    <p>
      {data.p1.substring(0,100)}...  <Link to={`/${data.id}`}>Read more</Link>
    </p>
    </div>
      ))
    }
    </>
  )
}

export default Card