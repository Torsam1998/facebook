import React from "react";
import './Footer.css'
import logo from '../assets/logo.png';

function Footer(){
    const date= new Date();
    const year=date.getFullYear();
    const month=date.getMonth()+1;
    return(
        < div className="footer">
        <div className="footer_with_all">

     <div className="footer__about">
     <img src={logo} alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem recusandae aliquam distinctio in iste tenetur dolor ipsam excepturi eligendi</p>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-linkedin"></i>
     </div>
     <div className="footer__planeaEvents">
     <h2>Plan Events</h2>
     <p>Creat and Set UP</p>
     <p>Sell Tickets</p>
     <p>Online RSVP</p>
     <p>Online Events</p>
     <h2>Brandde DP</h2>
     <p>Create DP</p>
     <p>Use Dp</p>
     </div>
     <div className="footer__brandde">
     <h2>Brandde</h2>
    <p>About Us</p>
    <p>Press</p>
    <p>Contact Us</p>
    <p>Help Centre</p>
    <p>How It Works</p>
    <p>Privacy</p>
    <p>Terms</p>
     </div>
     <div className="stay__in__loop">
     <h2>Stay in the Loop</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas nobis obcaecati quasi temporibus maxime.</p>
    <div className="footer__form">
        <input type="email"placeholder="enter your email address" />
        <button>subscribe Now</button>
    </div>

     </div>
     
   

     </div>
     <div className="footer__copyright">
        <p>copyright &copy;  2022-{year} </p>
        
    </div>
    </div>
    )    
}
export default Footer