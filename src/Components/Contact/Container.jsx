import React from 'react';
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import full from "/src/images/full.jpg"
import app from "/src/images/APP.jpg";
import cloud1 from "/src/images/Cloud Computing.jpg";
import code from "/src/images/codecourses.jpg";
import pcb from "/src/images/PCB.png";
import robot from "/src/images/Robotics1.jpg"
import "/src/index.css";

export default function Container() {
  return (
    <div className='landcontainer'>
      <div className='courseslink ' data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="300"
        data-aos-easing="ease-in-sine">
        <Link to="fullstack">
          <img src={full} />

          <h1>FULL STACK</h1>
          <div className='btncon'> <button><TiArrowRightThick size={30} /></button></div>
          </Link>
      </div >
      <div className='courseslink ' data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="600"
        data-aos-easing="ease-in-sine">
        <Link to="robotics_iot">
          <img src={robot} />
          <h1 >ROBOTICS & IOT</h1>
          <div className='btncon'> <button><TiArrowRightThick size={30} /></button></div>
          </Link>
      </div>
      <div className='courseslink ' data-aos="fade-up"
        data-aos-offset="300"
        data-aos-delay="900"
        data-aos-easing="ease-in-sine">
        <Link to="cloud_computing">   <img src={cloud1} />
          <h1>CLOUD COMPUTING</h1>
          <div className='btncon'><button><TiArrowRightThick size={30} /></button></div>
          </Link>
      </div>
      <div className='courseslink ' data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="900"
        data-aos-easing="ease-in-sine">

        <Link to="app_development" 
        >
          <img src={app} />
          <h1>APP DEVELOPMENT</h1>
          <div className='btncon'>  <button><TiArrowRightThick size={30} /></button></div>
        </Link>
      </div>
      <div className='courseslink ' data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="600"
        data-aos-easing="ease-in-sine">
        <Link to="python_Advanced">
          <img src={code} />
          <h1>PYTHON</h1>
          <div className='btncon'>  <button><TiArrowRightThick size={30} /></button></div>
        </Link>
      </div>
      <div className='courseslink ' data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="300"
        data-aos-easing="ease-in-sine">
        <Link to="pcb_designing">
          <img src={pcb} />
          <h1>PCB DESINGING</h1>
          <div className='btncon'>   <button><TiArrowRightThick size={30} /></button></div>
        </Link>
      </div>
    </div>
  )
}
