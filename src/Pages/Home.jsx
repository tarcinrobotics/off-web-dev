import React from 'react';
import Code from '../Components/Code';
import Print from "../Components/Print"
import Gif from '../Components/Gif';
import Offer from '../Components/Offer';
import Courses from '../Components/Courses';
import Services from '../Components/Services';

export default function Home() {
  return (
    <div>
      <Gif/>
      <Services/>
      <Code/>
      <Print/>
      <Offer/>
      <Courses/>
    </div>
  )
}
