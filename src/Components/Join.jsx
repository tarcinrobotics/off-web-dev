import React from 'react';
import "./Join.css"
import { Link } from 'react-router-dom';

export default function Join() {
  return (
    <div className='join'>
       <div className='join_content'>
        <div className="join_banner">
        {/* <button>Join our Team</button> */}
            <h1>Be a part of Tarcin family through Employability, User-Paid Internships, Paid Internships and other training sessions.</h1>
        </div>
        <div className="join_btn">
        <button> <Link to="hiring" style={{ color: "#000", textDecoration: "none" }}>Join our Team</Link></button>
        </div>
      
       </div>
           
        </div>

  )
}
