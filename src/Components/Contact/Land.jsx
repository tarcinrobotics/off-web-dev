import React from 'react';
// import student from "/src/images/student.png";
import girlstudent from "/src/images/courses.jpeg"
import "/src/index.css"

export default function Land() {
  
  return (
    <div  className='Land'>
      <div className='landcontant'>
        <h2 data-aos="zoom-in">Our Professional Courses</h2>
        <p data-aos="fade-up"
          >Join a community of learners dedicated to personal and professional growth. Enroll now to access premium content, personalized feedback, and a pathway to a brighter, more fulfilling future.</p>
      </div>
      <div className='landim'>
        <img src={girlstudent} data-aos="zoom-in-left" />
      </div>
    </div>
  )
}
