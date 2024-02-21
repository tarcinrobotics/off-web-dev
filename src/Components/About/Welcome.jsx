import React from 'react';
import robo from "/src/images/Heman.png";
import "./About.css";

export default function Welcome() {
  return (
    <div className='wel'>
      <div className='para'>      
        <p>Tarcin Robotic is a Product Engineering & Digital Transformation company that makes you an professional leader through Innovative solutions. We focus on digital transformation and help them to achieve profitable results.</p>
        <br />
        <p>
          At Tarcin Robotic LLP, our mission is clear: to bridge the gap between human ingenuity and technological advancement. We are dedicated to harnessing the latest technology to enhance lives, transform industries, and inspire innovation.
          </p>
        
<h1>Our Values</h1>
<ul>
    <li><span>Innovation:</span> We thrive on pushing the boundaries of what&#39;s possible in robotics.</li>
    <li><span>Quality:</span> We never compromise on the quality and reliability of our products.</li>
    <li><span>Sustainability:</span> We are dedicated to eco-friendly and sustainable practices.</li>
    <li><span>Collaboration:</span> We believe in the power of partnerships and teamwork.</li>
</ul>
    

      </div>
      <div className="wimage">
        <img src={robo} />
      </div>
    </div>
  )
}
