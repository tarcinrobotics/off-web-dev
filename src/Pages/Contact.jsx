import React from 'react';
import t from "../images/T.png";
import"../index.css";

export default function Contact() {
  
  return (
    <div  className='contact'>
      <div className="contimg">
        <h2>CONTACT US</h2>
        <img src={t} alt='T image'/>
      </div>
  
        <form>
        <div className="inp">
          <label >Your Name*</label>
          <input type='text' class="column" required/>
        </div>
        <div className="inp">
          <label>Phone Number</label>
          <input type='text' />
        </div>
        <div className="inp">
          <label>Your Email*</label>
          <input type='email' required />
        </div>
        <div className="inp">
          <label>Subject*</label>
          <input type='text' required />
        </div>
        <div className="inp">
          <label>Your Question*</label>
          <textarea required></textarea>
        </div>
        <div className='contbtn'>        <button>Submit</button></div>

        </form>

      </div>
  )
}
