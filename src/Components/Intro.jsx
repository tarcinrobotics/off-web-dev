import React from 'react';
import "./Intro.css"
import tarcin from "../images/courses.jpeg"
import { Link } from 'react-router-dom';
export default function Intro() {
  return (
    <div className=" intro" data-aos="fade-up" >
      <div className="icontent" >
      <h2>TARCIN ROBOTIC, As a leading force in robotics, academy, and big data, we are
dedicated in shaping the future by empowering individuals and organizations with cutting-
edge technologies.</h2>
     <p>Do you want to step in to the future before others. Let's Build Something
amazing with Tarcin.</p>
     <div className="btns">
      <a href='https://www.youtube.com/watch?v=fYK8m80OE_4' className='product_btn'>WATCH THE VIDEO</a>
      <Link to="contact-us" className='contact_btn'  style={{color: "#fff"}} >CONTACT</Link>
     </div>
     </div>
      <div className='iimg' data-aos="fade-up">
        <img src={tarcin} alt="Tarcin Robotic" />
      </div>
        

    </div>
  )
}
// import React from 'react';
// import "./Intro.css"
// import tarcin from "../images/TarcinGif.gif"
// import { Link } from 'react-router-dom';
// export default function Intro() {
//   return (
//     <div className=" intro"  >
      
    
//       <div className="icontent" data-aos="fade-up">
//       <h2>Tarcin Robotics is the Future of Indian Robots! We empower in the field of teaching robots by educating the students of K-College students with our learning platforms.</h2>
//      <p>Do you want to step in to the future before others. Let's Build Something
// amazing with Tarcin.</p>
//      <div className="btns">
//       <button className='product_btn'><a href='https://www.youtube.com/watch?v=fYK8m80OE_4'>WATCH THE VIDEO</a></button>
//       <button className='contact_btn' style={{borderColor: "#fff"}} > <Link to="contact-us" style={{color: "#fff"}} >CONTACT</Link></button>
//      </div>
//      </div>
//       <div className='iimg' data-aos="fade-up">
//         <img src={tarcin} alt="Tarcin Robotic" />
//       </div>
        

//     </div>
//   )
// }
