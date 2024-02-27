import React from 'react';
import "./Products.css"
import Product from '../Components/Product/Product';
import spyter from "/src/images/Spyder.png"
import hand1 from "/src/images/hand1.png"
import hand2 from "/src/images/hand2.png"
import heman from "/src/images/head.png"
import Pickplace from "/src/images/Pickplace.png"
import robots from "/src/images/robots.png"

export default function Products() {
  return (
    
    <div className='productss'>
  
       <h1 className='heading' style={{margin:"1rem auto",color:"#002aff"}}>PRODUCTS</h1>
       <div className="pod">
      <Product head={`Nature-Inspired Agility: Tarcin's Quadruped Spyder`} content={`ASay hello to Tarcin Robotic LLP's Quadruped Spyder - a clever robot inspired by spiders. This cool robot moves super well, just like a spider, and it can go on all kinds of surfaces, it adapts to different situations, getting better at handling obstacles and tricky terrain. With smart legs, fancy sensors, and the ability to move by itself,the Quadruped Spyder is like a robotic superhero in the world of walking robots!`}  img={"/assets/Spyder-tmFhuqWi.png"} />

      <Product head={`Tarcin Robotic's Robot Arm Responds to Your Access Movements`} content={`Tarcin Robotic's Accelerometer-Based Robot Arm lets you guide the robot arm through simple gestures, transforming the way you command with effortless motions. It responds to and is operated by Access movements, eliminating the need for traditional buttons or controls.`}   img={"/assets/hand2-6djVaUdz.png"} />

      <Product head={`Steering Through Challenges: Tarcin Robotic's Obstacle
Avoidance Car`} content={`Dive into the universe of Robotics and IoT with the Sensor-Based Obstacle Avoidance Car by Tarcin Robotics - a high-tech marvel designed to be your driving superhero. With special sensors, it's not just smart; it's super aware, ensuring a safe and smooth ride. Buckle up for a tech-infused journey on an exploration through the worlds of sensors, robots, and IoT!`}   img={"/assets/hand1-imU4u1dG.png"} />

      <Product head={`Walking Together: Tarcin Robotic's
Human Follower Car in Action`} content={`Envision a future where a small car becomes your helpful companion. Meet TarcinRobotic's Human Follower Car - a robotic ally. Imagine it effortlessly carrying your loads, assisting in shopping, and following you anywhere. Enter a dimension where the Human Follower Car reshapes convenience and enriches daily tasks through its advanced robotic capabilities.`}  img={"/assets/robots-gJ5TwlXa.png"} />

{/* <Product head={`He-Man`} content={`Dive into the cutting-edge world of robotics with our mind-blowing Human Robotic Head! 🤖 Explore the fusion of humanity and technology as we unravel the secrets behind this AI marvel. Join the conversation and witness the future today! `} img={"/assets/head-Oocsc3oC.png"} /> */}



<Product head={`Smart Helpers: Tarcin Robotic's Pick and Place Robot`} content={`Tarcin Robotic's Pick and Place Robot isn't just fast and accurate-it's really good at fitting into different jobs. Whether it's in a factory or a warehouse, this robot can do tasks well and make everything run smoothly. It brings a new level of simplicity and
efficiency to automation.`}   img={"/assets/Pickplace-voZXiuX3.png"} />

</div>
    </div>
 
        
  )
}
