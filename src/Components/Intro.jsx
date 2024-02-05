import React from 'react';
import "./Intro.css"
import tarcin from "../images/TarcinGif.gif"
import { Link } from 'react-router-dom';
export default function Intro() {
  return (
    <div className=" intro"  >
      
    
      <div className="icontent" data-aos="fade-up">
      <h2>Tarcin Robotics is the Future of Indian Robots! We empower in the field of teaching robots by educating the students of K-College students with our learning platforms.</h2>
     <p>Do you want to step in to the future before others. Let's Build Something
amazing with Tarcin.</p>
     <div className="btns">
      <button className='product_btn'><a href='https://www.youtube.com/watch?v=fYK8m80OE_4'>WATCH THE VIDEO</a></button>
      <button className='contact_btn'> <Link to="contact-us" >CONTACT</Link></button>
     </div>
     </div>
      <div className='iimg' data-aos="fade-up">
        <img src={tarcin} alt="Tarcin Robotic" />
      </div>
        

    </div>
  )
}
