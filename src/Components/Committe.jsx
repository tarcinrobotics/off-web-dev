import React from 'react';
import "./Committee.css"

export default function Committe() {
  return (
    <div className='Commitment'>
        <h1>Our Commitment to Excellence</h1>
        <div className="lists">
        <div className="list l1" data-aos="zoom-in-down">
            <h4>Expert Instructors</h4>
            <p>Our team of experienced instructors is dedicated to guiding you
through every step of your learning journey. Benefit from their industry insights and
hands-on expertise.</p>
        </div>
        <div className="list l2" data-aos="zoom-in-down">
            <h4>State-of-the-Art Facilities</h4>
            <p>Immerse yourself in a dynamic learning environment
equipped with the latest technology. Our facilities are designed to inspire creativity
and foster collaboration.</p>
        </div>
        <div className="list l3" data-aos="zoom-in-down">
        <h4>Industry-Relevant Curriculum</h4>
            <p>Stay ahead of the curve with our meticulously
crafted curriculum. We continuously update our courses to align with the latest
industry trends and technological advancements.</p>
        </div></div>
    </div>
  )
}
