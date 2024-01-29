import React from 'react';
import printi from '../images/printing.jpg';
import "../index.css";
import  'aos/dist/aos.css'

export default function Print() {
  return (

   
    <div className='print '>
      <div className='writing' data-aos="fade-down-right" data-aos-duration="1000">
          <hr className='h1'/>
        <h1>
            <span>3D Printing</span> Service</h1>
            <p>
                At the intersection of art, science, and engineering, 3D printing offers a transformative journey limited only by your imagination. It's a realm where you can sculpt personalized jewelry, engineer complex prototypes, reimagine fashion, and even print life-changing medical devices. Here, the only constraint is the extent of your creativity.
            </p>
            <button type='button'>Learn More</button>
        <hr className='h2' />
        </div>
      <div className='imagee' data-aos="fade-down-left" data-aos-duration="1000">
            <img src={printi}/>
        </div>

    </div>

  )
}
