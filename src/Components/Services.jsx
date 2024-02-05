import React from 'react';
import 'aos/dist/aos.css'
import "../index.css"
import cloud from "../images/CloudComputing.jpg"
import Robot from "../images/RoboticsAndIoT.jpg"
import Industrial from "../images/Industrial.jpg";


export default function Services() {
  return (
      <div className='Services' style={{overflowX:"hidden"}}>
          <h1 data-aos="fade-right">Our <span>Services</span></h1>
          <h5>Skill line is one powerful online software suite that combines all the tools needed to run a successful school or office.</h5>
          <div className='three' >
              <div className='fl' data-aos="fade-right">
                  <img src={Robot} />
                  <h3>Robotics and IOT</h3>
                  <p style={{textAlign:"justify"}}>Welcome to the exciting world of Robotics and the Internet of Things (IoT)! This comprehensive course is designed to provide you with a solid foundation in both robotics and IoT, enabling you to explore the convergence of these two cutting-edge-technologies. but these technologies are evolving together to ease human life</p>

        </div>
              <div className='fl' data-aos="fade-up">
                  <img  src={cloud}  />
                  <h3>​​Cloud Computing</h3>
                  <p style={{textAlign:"justify"}}>Whether you're a student, an aspiring IT professional, or a business owner seeking to leverage cloud services, this course will provide you with the expertise necessary to navigate the dynamic landscape of  cloud computing. cloud computing means storing and accessing data and programs over the internet.</p>
        </div>
              <div className='fl aos-init ' data-aos="fade-left" >
                  <img src={Industrial}  />
                  <h3>Industrial 4.0</h3>
                  <p style={{textAlign:"justify"}}>Industry 4.0 projects are at the forefront of this revolution, focusing on the integration of cutting-edge technologies to enhance productivity, reduce costs, and drive innovation. Replacing manual inspection business models with AI-powered visual insights reduces manufacturing errors and saves money and time.</p>
        </div>
       </div>

      </div>
  )
}
