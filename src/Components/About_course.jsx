import React from 'react';
import "./About_course.css"
import students from "../images/Assisted_students.jpg"
import partners from "../images/Industrial_Partners.jpg"
import partners1 from "../images/Industrial_Partners1.jpg"
import platform from "../images/platform.jpg"

export default function About_course() {
  return (
    <div className='abt'>
        <h1>Ignite Your Genius</h1>
        <h2>Using AI wizardry, robotic brilliance, IoT prowess, and web mastery, transform dreams!</h2>
        <div className="about_images">
           <div className="explore" data-aos="fade-down"><img src={students} alt='students' /><p>With the help of us, over 5000 students have realized their full potential and are now pursuing adventures in web mastery, IoT wonders, robotic excellence, and AI wizardry. Become a part of an ongoing success story!</p></div> 
           <div className="explore" data-aos="fade-down" data-aos-delay="200"><img src={platform} alt='platform'/><p>Fire up your coding enthusiasm with Code Asthram. Grow into your potential, as sprouted. In the domain of technology, they collectively determine your fate.</p></div> 
           <div className="explore" data-aos="fade-down" data-aos-delay="400"><img src={partners} alt='partners'/><p>Power in profusion! Come along with us as we advance content excellence at over 20 schools, where collaboration is a strategic step toward digital prominence rather than just an option.</p></div> 
           <div className="explore" data-aos="fade-down" data-aos-delay="600"><img src={partners1} alt='partners1'/><p>We create long-lasting bonds with one another. Our long-lasting relationships with our respected partners are evidence of our dedication to long-term success.</p></div> 
          
            
        </div>
    </div>
  )
}
