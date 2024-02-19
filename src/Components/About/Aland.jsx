import React from 'react'
import pic from "/src/images/About1.png";
import "./About.css"

export default function Aland() {
  
  return (
    
      <div  className='aland'>
        <div className="acontent">
              <h2> Our Story</h2>
              <p>

              TARCIN ROBOTIC LLP began with a vision “To
          Accelerate the advent of Technology into the Society”. Since then, for five years we are running on
          track towards success. We have become synonymous with excellence in the fields of robotics, cloud computing, ethical hacking, app development, full-stack development, PCB designing, 3D printing, networking, and more.
              </p>
        </div>
        <div className="aimage">
            <img src={pic}/>
        </div>
      </div>
  )
}
