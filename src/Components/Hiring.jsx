import emailjs from '@emailjs/browser';
import React from 'react';
import logo from "../images/Logo_T.png"
import"../index.css";
export default function Hiring() {
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
            <h2>RECRUITMENT</h2>
            <img src={logo} alt='T image'/>
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
              <label>Your Email</label>
              <input type='email' required name='user_Email' />
            </div>
            <div className="inp">
              <label>College Name</label>
              <input type='text' required name='college' />
            </div>
            <div className="inp">
              <label>Your Resume</label>
              <input type='file'/>
            </div>
            <div className="inp">
              <label>Your Expirence</label>
              <textarea required name='expirence'></textarea>
            </div>
            <div className='contbtn'>        <button>Submit</button></div>
    
            </form>
    
          </div>
  )
}


