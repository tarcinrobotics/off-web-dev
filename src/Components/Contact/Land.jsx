import React from 'react';
// import student from "/src/images/student.png";
import girlstudent from "/src/images/courses.jpeg"
import "/src/index.css"

export default function Land() {
  
  return (
    <div  className='Land'>
      <div className='landcontant'>
        <h2 data-aos="zoom-in" style={{color:"#000"}}>Our Professional Courses</h2>
        <h4 data-aos="fade-up"
          >Join a community of learners dedicated to personal and professional growth. Enroll now to access premium content, personalized feedback, and a pathway to a brighter, more fulfilling future.</h4>
      </div>
      <div className='landim'>
        <img src={girlstudent} data-aos="zoom-in-left" />
      </div>
    </div>
  )
}
