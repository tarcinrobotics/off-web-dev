import React from 'react';
import robo from "/src/images/robot (1).png";
import "./About.css";

export default function Welcome() {
  return (
    <div className='wel'>
      <div className='para'>
        <p>Welcome to Tarcin Robotic LLP, a pioneering technology company that was established in 2018 with a vision to drive innovation and shape the digital future. Over the years, we have become synonymous with excellence in the fields of robotics, cloud computing, ethical hacking, app development, full-stack development, PCB designing, 3D printing, networking, and more.

          <br/><br/>
          At Tarcin Robotic LLP, our mission is clear: to bridge the gap between human ingenuity and technological advancement. We are dedicated to harnessing the latest technology to enhance lives, transform industries, and inspire innovation.

</p>
      </div>
      <div className="wimage">
        <img src={robo}/>
      </div>
    </div>
  )
}
