import React from 'react';
// import student from "/src/images/student.png";
import girlstudent from "/src/images/girl.png"
import "/src/index.css"

export default function Land() {
  
  return (
    <div  className='Land'>
      <div className='landcontant'>
        <h2 data-aos="zoom-in">Our Professional Courses</h2>
        <h4 data-aos="fade-up"
          >Replenish man have thing gathering lights

          <br />yielding shall you</h4>
      </div>
      <div className='landim'>
        <img src={girlstudent} data-aos="zoom-in-left" />
      </div>
    </div>
  )
}
