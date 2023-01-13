import React,{useState} from 'react'
import './Chatboard.css'
import moving_bot from '../assets/moving__bot.gif'


function Chatboard() {
    const [akuOpenDoor, setAkuOpenDoor]=useState(false);
const openDoor = ()=>{
    setAkuOpenDoor(true)
}

const closeDoor =()=>{
    setAkuOpenDoor(false)
}
  return (
<div className='chatboard'> 

        <div className='chatbot' title='Press me' onClick={openDoor} ><img src={moving_bot} alt="" /> </div>
        
{akuOpenDoor &&(
<form className='chat_bot_form'>
<button onClick={closeDoor}>Close</button>
            <input type="text" placeholder='Enter your Name...' />
            <input type="email" placeholder='Enter your Email...' />
            <input type="text" placeholder='Subject...' />
            <textarea name="Type youe message here ..."  cols="30" rows="10"></textarea>
            <button>Submit</button>
        </form>
)}
        
    </div>
  )
}

export default Chatboard