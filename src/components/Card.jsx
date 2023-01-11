import React from 'react'
import News from '../assets/News.jpg'
import "./Card.css"
function Card() {
  return (
    <div className='card'> 
    <img src={News} alt="news" />
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae pariatur qui voluptatibus rem illo reprehenderit, voluptates labore debitis ipsam repellendus... <a href="">Read more</a>
    </p>
    </div>
  )
}

export default Card