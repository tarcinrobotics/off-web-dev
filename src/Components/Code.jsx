import React from 'react'
import { Link } from 'react-router-dom';
import "../index.css"

import Rect19 from "../images/Rectangle2019.svg";
import Rect21 from "../images/Rectangle2021.svg";



export default function Code() {
    return (
        <div className='code'>

            <h1 className='content'>What is <span style={{ "fontFamily": "karala"}}>Code Asthram ?</span></h1>
            <h2>Where Creativity Meets Code!</h2>
            <p className='subject'>Are you ready to embark on a journey of innovation, exploration, and learning through coding? At codeasthram, we're thrilled to provide you with a dynamic platform that supports two of the most popular programming languages: Arduino and Python. Our mission is to make coding accessible, engaging, and educational for all, regardless of your age or skill level.</p>


            <div className='img'>
                <img src={Rect19} alt='rect19' className='rect-19 aos-init' data-aos="fade-down" />
                <img src={Rect21} alt='rect19' className='rect-21 aos-init' data-aos="fade-down" />
               
            </div>
            
           
        </div>
    )
}