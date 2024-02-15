import React from 'react';
import "./Footer.css";
import "../index.css"
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div className='bottom'>
      <div className='footer'>

        <div className='cont cont1'>
          <h1>TARCIN ROBOTIC LLP</h1>
          <h4>Unlock the Tech Unleash the World <br /><br />Follow us</h4>
          <a style={{ textDecoration: 'none' }}> <FaTwitter color='#4a99e9' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
          <a href='https://www.instagram.com/tarcin_robotic.in?igsh=MW9mZGQydmUyeHQ1dA==' style={{ textDecoration: 'none' }}> <FaInstagram color='#fb0364' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
          <a href='https://www.linkedin.com/company/tarcin-robotic-llp/' style={{ textDecoration: 'none' }}> <FaLinkedin color='#3273af' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
          <a style={{ textDecoration: 'none' }}> <FaFacebook color='#3976ea' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
          <a href='https://www.youtube.com/@TarcinRobotic' style={{ textDecoration: 'none' }}> <IoLogoYoutube color='#FF0000' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a><br />
          <Link to="contact-us" ><button style={{color:"#fff"}}>Contact Us</button></Link>
        </div >
        <div className='cont cont2' >
          <h3>Address</h3>
          <p>Tarcin Robotics LLP,</p>
          <p>176 East, 6th Street,</p>
          <p> KK-Nagar,</p>
          <p> Madurai-625020.</p>
        </div>
        <div className='cont cont3'>
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
