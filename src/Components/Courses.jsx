import React from 'react';
import printi from '../images/integrations.png';
import "../index.css";
import { Link } from 'react-router-dom';

export default function Courses() {
  return (
      <div className='print '>
          <div className='writing' data-aos="zoom-in-down">
            
              <h1>
                  Professional
                  <span> Courses</span> </h1>
              <p>
Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms              
</p>
              <Link to="courses"><button type='button' style={{ "marginTop": "3rem" }}>Explore Courses</button></Link>
              
          </div>
          <div className='imagec' data-aos="fade-up"
              data-aos-duration="3000">
              <img src={printi} />
          </div>

      </div>
  )
}
