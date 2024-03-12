import React from 'react';
import "./Footer.css";
import "../index.css"
import { Link } from 'react-router-dom';
import { FaInstagramSquare, FaLinkedin , FaPhoneAlt,FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter,FaSquareYoutube } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import footer from "../images/Footer.png"
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div className='bottom'>
      <div className='footer'>

        <div className='cont cont1'>
          <img src={footer} width="350px" style={{marginTop:"1rem"}} /> 
          <h4 >Follow us</h4>
          <a style={{ textDecoration: 'none' }}> <FaSquareXTwitter  color='#fff' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
          <a href='https://www.instagram.com/tarcin_robotic.in?igsh=MW9mZGQydmUyeHQ1dA==' style={{ textDecoration: 'none' }}> <FaInstagramSquare color='#fff' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
          <a href='https://www.linkedin.com/company/tarcin-robotic-llp/' style={{ textDecoration: 'none' }}> <FaLinkedin color='#fff' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
          <a style={{ textDecoration: 'none' }}> <FaFacebookSquare color='#fff' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
          <a href='https://www.youtube.com/@TarcinRobotic' style={{ textDecoration: 'none' }}> <FaSquareYoutube color='#fff' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a><br />
          <Link to="contact-us" ><button style={{color:"#003fb2"}}>Contact Us</button></Link>
        </div >
        <div className='cont cont2'>
          <a href='https://www.google.com/maps/place/176,+E+6th+St,+KK+Nagar,+Madurai,+Tamil+Nadu+625020,+India/@9.935677,78.146177,15z/data=!4m6!3m5!1s0x3b00c5b7e1747461:0x6783d013b50f7c59!8m2!3d9.9356774!4d78.146177!16s%2Fg%2F11ggmp3ypn?hl=en-US&entry=ttu' style={{ color: "black",textDecoration:"none" }}>
          <h3 style={{"color":"#fff"}} >Address</h3>
          <p>Tarcin Robotic LLP,</p>
          <p>176 East, 6th Street,</p>
          <p> KK-Nagar,</p>
          <p> Madurai-625020.</p>
          </a>
        </div>
        <div className='cont cont3' >
          <h3>Contact Details</h3>
          <div ><a href="tel:+919884675586" className='flex' style={{ color: "#fff", textDecoration: "none" }}><FaPhoneAlt />+91  9884675586</a> </div>
          <div ><a href="mailto:contact@tarcinrobotic.in" className='flex' style={{ color: "#fff", textDecoration: "none" }}><IoMail />   contact@tarcinrobotic.in</a> </div>
          
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright © tarcinrobotic.in</p>
      </div>

    </div>
  )
}
