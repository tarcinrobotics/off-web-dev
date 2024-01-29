import React from 'react'
import pic from "/src/images/father-sons-making-robot.jpg";
import "./About.css"

export default function Aland() {
  
  return (
    
      <div  className='aland'>
        <div className="acontent">
              <h2>Tarcin Robotic LLP</h2>
              <p>Tarcin Robotic is a Product Engineering & Digital Transformation company that makes you an professional leader through Innovative solutions. We focus on digital transformation and help them to achieve profitable results</p>
        </div>
        <div className="aimage">
            <img src={pic}/>
        </div>
      </div>
  )
}
