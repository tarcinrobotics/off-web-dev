import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div className='bottom'>
      <div className='footer'>
  
          <div className='cont cont1'>
                  <h1>TARCIN ROBOTIC LLP</h1>
                  <h4>Unlock the Tech Unleash the World <br /><br />Follow us</h4>
                  <a style={{ textDecoration: 'none' }}> <FaTwitter color='#4a99e9' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
                  <a href='https://www.instagram.com/tarcin_robotics.in/' style={{ textDecoration: 'none' }}> <FaInstagram color='#702042' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
                  <a href='https://www.linkedin.com/company/tarcin-robotic-llp/' style={{ textDecoration: 'none' }}> <FaLinkedin color='#3273af' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a>
                  <a style={{ textDecoration: 'none' }}> <FaFacebook color='#3976ea' size={40} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></a><br/>
              <Link to="contact-us" ><button>Contact Us</button></Link>
         </div >
          <div className='cont cont2' >
                  <h5>Tarcin Robotics LLP,</h5>

              <h5>176 East, 6th Street,</h5>

          <h5> KK-Nagar,</h5>

              <h5> Madurai-625020.</h5>
              </div>
          <div className='cont cont3'>
              <h3><FaPhoneAlt/>  +91  98846 75586</h3>
                  <h3><a href="mailto:contact@tarcinrobotic.in" style={{color:"#fff",textDecoration:"none"}}><IoMail />  contact@tarcinrobotic.in</a></h3>
              {/* <iframe 
                  title="Map" style={{
                      width:"600",
                  height:"450"}}
                  allowFullScreen
                  frameBorder="0"
                  loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.917348368352!2d78.146177!3d9.935677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5b7e1747461%3A0x6783d013b50f7c59!2s176%2C%20E%206th%20St%2C%20KK%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625020%2C%20India!5e0!3m2!1sen!2sus!4v1704711053976!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
        </div>
        <div className='copyright'>
              <h6>Copyright © tarcinrobotic.in</h6>
        </div>

      </div>
  )
}
