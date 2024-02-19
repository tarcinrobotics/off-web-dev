import emailjs from '@emailjs/browser';
import React from 'react';
import logo from "../images/Logo_T.png"
import "./Hiring.css";
export default function Hiring() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e2yzm1h', 'template_jfj1ipr', form.current, 'qp3s1jycFs6JYfMgN')
      .then((result) => {
        alert("Your email sent successfully")

      }, (error) => {
        alert("Your email cannot reach the server, Try again")
      });
  };
  return (
    <div className='recruit'>
      <div className="head">
        <h1>Join Our Team</h1>
        <img src={logo} />
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputs">
          <div className="left">

            <div className="inpc">
              <input name='First_Name' type='text' placeholder='First Name' required />
            </div>
            <div className="inpc">
              <input name='Last_Name' type='text' placeholder='Last Name' required />
            </div>
            <div className="inpc">
              <input type='text' name='contact_Number' placeholder='Contact Number' />
            </div>
            <div className="select">
              <select name='gender'>
                <option value="Choose">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

          </div>
          <div className="right">
           
            <div className="inpc">
              <input type='email' required name='user_Email' placeholder='Email'  />
            </div>
            {/* <div className="inpc">
              <input type='text' required name='college' placeholder='College Name' />
            </div> */}
            <div className="select">
              <select name='type-IN_Em'>
                <option value="Choose">--Choose--</option>
                <option value="Intern">Internship</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <div className="select">
              <select name='Experience'>
                <option value="Choose">Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="0-2">0-2 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>
            <div className="inpf">
  <label htmlFor="resume">Upload Your Resume</label>
  <input
    type="file"
    id="resume"
    accept=".pdf, .doc, .docx" // Specify accepted file formats if needed
    required
  />
</div>
</div>
        </div>
        <div className="text">
        <textarea placeholder='Describe your Experience in words...' name='Experiences'></textarea>
        </div>
        <div className="button">
          <button type='submit' onClick={sendEmail}>Submit</button>
        </div>
      </form>

    </div>

    // <div  className='contact'>
    //   <div className="contimg">
    //     <h2>RECRUITMENT</h2>
    //     <img src={logo} alt='T image'/>
    //   </div>

    //     <form ref={form} onSubmit={sendEmail}>
    //     <div className="inp">
    //       <label >Your Name*</label>
    //       <input name='user_Name' type='text' className="column" required/>
    //     </div>
    //     <div className="inp">
    //       <label>Phone Number</label>
    //       <input type='text'name='phone_Number' />
    //     </div>
    //     <div className="inp">
    //       <label>Your Email</label>
    //       <input type='email' required name='user_Email' />
    //     </div>
    //     <div className="inp">
    //       <label>College Name</label>
    //       <input type='text' required name='college' />
    //     </div>
    //     <div className="inp">
    //       <label>Your Resume</label>
    //       <input type='file'/>
    //     </div>
    //     <div className="inp">
    //       <label>Your Expirence</label>
    //       <textarea required name='expirence'></textarea>
    //     </div>
    //     <div className='contbtn'>        <button>Submit</button></div>

    //     </form>

    //   </div>
  )
}


