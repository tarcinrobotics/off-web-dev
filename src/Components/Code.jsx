// import React from 'react'
// import { Link } from 'react-router-dom';
import "../index.css"
import "./Code.css"
import { Link } from "react-router-dom";
import Code1 from "../images/code.jpg";

import c from "../images/c.png";
import python from "../images/python.png";
import machine from "../images/machine.png";
import Sprouted from "../images/Sprouted.png";
import Sprouted1 from "../images/Sprouted_Blue_copy.png";



export default function Code() {
    return (
        // <div className='code '>

        //     <h1 className='content'>Code <span>Asthram</span> </h1>

        //     <div className="sub_code"><p className='subject' >Are you ready to embark on a journey of innovation, exploration, and learning through coding ?<br/> At codeasthram, we're thrilled to provide you with a dynamic platform that supports two of the most popular programming languages:   <span className="bold">Arduino and Python. </span><br/> Our mission is to make coding accessible, engaging, and educational for all, regardless of your age or skill level.</p></div>
        //     <h2>Where Creativity Meets Code!</h2>
        //     <div className="code_btn"><a href="https://tarcinacademy.in/" >Let's begin</a></div>
        //     <div className='img'>
        //         <img src={Rect19} alt='rect19' className='rect-19 aos-init' data-aos="fade-down" />
        //         <img src={Rect21} alt='rect19' className='rect-21 aos-init' data-aos="fade-down" />

        //     </div>


        // </div>
        <div className="learning">
            <div className="learning_plaform">
                <h1 style={{ color: "#003fb2" }}>Learning Platform</h1>
                <hr />

                <div className="code_asthram">
                    {/* <img src={head} alt="IMAGE" className="head" /> */}
                    <div className="code_asthram_content">
                        <h1 >CODE ASTHRAM</h1>
                        <h2>Welcome to Code Asthram - Your Path to Coding Excellence!</h2>
                        <p>Our software solution, "Code-Asthram," aims to make coding accessible to all age groups, including students.
                            This assistive technology has the most potential to address the needs of students receiving special education out of all those used in the field. </p>
                    </div>
                    <div className="code_asthram_img">
                    <div className='image'>
                    <img src={Code1} alt="Code_Asthram Image" />  
                    </div>

                    
                    {/* <div className='floating'>
                    <div className='floating-1'><img src={c}  alt='calendar'/></div>
                    <div className='floating-2'><img src={python} alt='congrat'/></div>
                    <div className='floating-3'><img src={machine}  alt='ux-class'/></div>
                    </div> */}

                    </div>
                </div>
                <div className="code_btn">
                   
                        <a href="https://tarcinacademy.in/" >Let's Begin</a>
                    
                </div>
                <div className="sprouted">
                    <div className="sprouted_img">

                        <img src={Sprouted1} alt="Sprouted platform Image" />
                    </div>
                    <div className="sprouted_content">
                        <h1>SPROUTED</h1>
                        {/* <img src={Sprouted} alt="IMAGE" className="head" /> */}
                        <h2>Grow from the Seed and become The Shade to a larger audience. You'll be sprouted and uplifted with our platform.</h2></div>

                </div>
                <div className="code_btn"><button> <a href="#" >Coming Soon</a></button>
                </div>

            </div>

        </div>
    )
}