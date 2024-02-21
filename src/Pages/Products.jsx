import React from 'react';
import "./Products.css"
import Product from '../Components/Product/Product';

export default function Products() {
  return (
    <div className='productss'>
      <Product head={`Nature-Inspired Agility: Tarcin's Quadruped Spyder`} content={`ASay hello to Tarcin Robotic LLP's Quadruped Spyder - a clever robot inspired by spiders. This cool robot moves super well, just like a spider, and it can go on all kinds of surfaces, it adapts to different situations, getting better at handling obstacles and tricky terrain. With smart legs, fancy sensors, and the ability to move by itself,the Quadruped Spyder is like a robotic superhero in the world of walking robots!`} img={"/src/images/Spyder.png"} />

      <Product head={`Tarcin Robotic's; Robot Arm Responds to Your Access Movements`} content={`Tarcin Robotic's; Accelerometer-Based Robot Arm lets you guide the robot arm through simple gestures, transforming the way you command with effortless motions. It responds to and is operated by Access movements, eliminating the need for traditional buttons or controls.`} img={"/src/images/hand2.png"} />

      <Product head={`Steering Through Challenges: Tarcin Robotic's; Obstacle
Avoidance Car`} content={`Dive into the universe of Robotics and IoT with the Sensor-Based Obstacle Avoidance Car by Tarcin Robotics – a high-tech marvel designed to be your driving superhero. With special sensors, it's not just smart; it's super aware, ensuring a safe and smooth ride. Buckle up for a tech-infused journey on an exploration through the worlds of sensors, robots, and IoT!`} img={"/src/images/hand1.png"} />

      <Product head={`Walking Together: Tarcin Robotic's;
Human Follower Car in Action`} content={`Envision a future where a small car becomes your helpful companion. Meet TarcinRobotic's; Human Follower Car - a robotic ally. Imagine it effortlessly carrying your loads, assisting in shopping, and following you anywhere. Enter a dimension where the Human Follower Car reshapes convenience and enriches daily tasks through its advanced robotic capabilities.`} img={"/src/images/robots.png"} />
    </div>
  )
}
