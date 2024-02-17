import React from 'react';
import Code from '../Components/Code';
import Print from "../Components/Print"
import Gif from '../Components/Gif';
import Offer from '../Components/Offer';
import Courses from '../Components/Courses';
import Services from '../Components/Services';
import Intro from '../Components/Intro';
import Inspartners from '../Components/About/Inspartners';
import Join from '../Components/Join';
import About_course from '../Components/About_course';
import Committe from '../Components/Committe';
import Videos from '../Components/Videos';

export default function Home() {
  return (
    <div>
      {/* <Gif/> */}
      <Intro/>
      <About_course/>
      <Committe/>
      <div id='ins' style={{marginTop:"3rem"}}>
      <Inspartners/>
      </div>
     
      {/* <Services/> */}
      <Code/>
      {/* <Print/>
      <Offer/>
      <Courses/> */}
      <Videos/>
      <Join/>
    </div>
  )
}
