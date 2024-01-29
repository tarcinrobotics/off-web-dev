import React from 'react';
import "../index.css";


import discussion from "../images/discussion.png";
import 'aos/dist/aos.css'


export default function Offer() {
    return (
        <div className='printo' >
            <div className='imageeo' data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" >
                <img src={discussion} />
            </div>
            <div className='writingo' data-aos="zoom-in-up" >
                <div className='offero'>
                    <h1>OFFERS <span>Online <br />Courses</span></h1>
                    <ul>
                        <li>Fullstack</li>
                        <li>Cloud Computing</li>
                        <li>App Development</li>
                        <li>C and C++</li>
                        <li>Python</li>
                        <li>Ethical Hacking</li>

                    </ul>
                
                </div>

            </div>
        </div>
    )
}
