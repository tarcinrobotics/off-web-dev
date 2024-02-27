import React from 'react';
import "./Join.css"
import { Link } from 'react-router-dom';

export default function Join() {
  return (
    <div className='join'>
       <div className='join_content'>
        <div className="join_banner">
        {/* <button>Join our Team</button> */}
            <h3> Are you  a student (or) a professional seeking upskilling (or) an organization
looking to stay at the forefront of innovation, TARCIN ROBOTIC LLP is your
partner on the journey to success. Explore our programs, engage with our
community, and embrace the future with confidence.</h3>
        </div>
        <div className="join_btn">
   <Link to="hiring" style={{ color: "#fff", textDecoration: "none" }}>Join our Team</Link>
        </div>
      
       </div>
           
        </div>

  )
}
