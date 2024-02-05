import React from 'react';
import emailjs from '@emailjs/browser';
import t from "../images/Logo_T.png"
import"../index.css";

export default function Contact() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sqwwc8x', 'template_sfknxg9', form.current, 'ymgKPBD3AHSbELqzY')
      .then((result) => {
          alert("Your email sent successfully")
          
      }, (error) => {
        alert("Your email cannot reach the server, Try again")
      });
  };
  return (
    <div  className='contact'>
      <div className="contimg">
        <h2>CONTACT US</h2>
        <img src={t} alt='T image'/>
      </div>
  
        <form ref={form} onSubmit={sendEmail}>
        <div className="inp">
          <label >Your Name*</label>
          <input name='user_Name' type='text' className="column" required/>
        </div>
        <div className="inp">
          <label>Phone Number</label>
          <input type='text'name='phone_Number' />
        </div>
        <div className="inp">
          <label>Your Email*</label>
          <input type='email' required name='user_Email' />
        </div>
        <div className="inp">
          <label>Subject*</label>
          <input type='text' required name='message' />
        </div>
        <div className="inp">
          <label>Your Question*</label>
          <textarea required name='questions'></textarea>
        </div>
        <div className='contbtn'>        <button>Submit</button></div>

        </form>

      </div>
  )
}


