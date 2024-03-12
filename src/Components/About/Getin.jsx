import React from 'react';

import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import "./About.css"


export default function Getin() {
  return (
    <div className='get'>
      <h1 style={{color:"#003fb2"}}>Get In Touch with US</h1>
  
      <div className="getcont">
        <div className="gcont">
          <a href='https://www.google.com/maps/place/176,+E+6th+St,+KK+Nagar,+Madurai,+Tamil+Nadu+625020,+India/@9.935677,78.146177,15z/data=!4m6!3m5!1s0x3b00c5b7e1747461:0x6783d013b50f7c59!8m2!3d9.9356774!4d78.146177!16s%2Fg%2F11ggmp3ypn?hl=en-US&entry=ttu' style={{ color: "black" }}> <div className='gbg'><IoLocationSharp size={40} /></div></a>
          <h4>Madurai</h4>
          <h6> 176 East,6th street, KK-Nagar,</h6>

          <h6>Maduari-625020</h6>
        </div>
        <div className="gcont">
        <a href="tel:+91 98846 75586" style={{color:"black"}}> <div className='gbg'> <FaPhoneSquareAlt size={40} color='#000' /></div></a>
          
          <h4>+91 98846 75586</h4>
        </div>
        <div className="gcont">
          <a href="mailto:contact@tarcinrobotic.in" style={{color:"black"}}> <div className='gbg'> <MdOutlineMail size={40} /></div></a>
          <h4>contact@tarcinrobotic.in</h4>
        </div>
      </div>
    </div>
  )
}
