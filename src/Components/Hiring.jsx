import emailjs from '@emailjs/browser';
import React from 'react';
import * as yup from "yup";
import logo from "../images/Logo_T.png"
import "./Hiring.css";
export default function Hiring() {
  let [data,setData]=React.useState({
    First_Name:"",
    Last_Name:"",
    contact_Number:"",
    user_Email:"",
    Experiences:"",
    Experience:"",
    gender:"",
    type:""
  })
  const form = React.useRef();
  let [error, setError] = React.useState({});
  function change(e) {
    let { name, value } = e.target;
    
    setData(formdata => {
      return {
        ...formdata,
        [name]: value
      }
    })
  }
  let validation = yup.object({
    First_Name: yup.string().matches(/^[A-Za-z]+$/,"First Name cannot be Number").required("First Name is required"),
    Last_Name: yup.string().matches(/^[A-Za-z]+$/,"Last Name cannot be Number").required("Last Name is required"),
    contact_Number: yup.string().matches(/^\d{10}$/,"Contact Number Should be in number").required("Contact Number is required"),
    user_Email: yup.string().email("Invalid Email Format").matches((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/),"Invalid Email Format").required("Email is required"),
    Experiences: yup.string().min(10,"Experiences Should be mininum 10 characters").matches(/^[A-Za-z0-9'"/, ]+$/,"Experiences cannot be Special characters").required("Experiences is required"),
    Experience: yup.string().required("Experience is required"),
    gender: yup.string().required("Gender is required"),
    type: yup.string().required("Type is required"),



  })
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await validation.validate(data, { abortEarly: false });
      console.log("success full");
      let result = await emailjs.sendForm('service_e2yzm1h', 'template_jfj1ipr', form.current, 'qp3s1jycFs6JYfMgN');
      alert("Your email sent successfully");
      setData({
        First_Name:"",
        Last_Name:"",
        contact_Number:"",
        user_Email:"",
        Experiences:"",
        Experience:"",
        gender:"",
        type:""
      })
      setError({})
    }
    catch (err) {
      let errors = {};
      err.inner.forEach(err => {
        errors[err.path] = err.message;
      })
      setError(errors);
    }
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
              <input name='First_Name' value={data.First_Name}  onChange={(e) => change(e)} type='text' placeholder='First Name'  />
              <div className='error'>{error.First_Name && <p>{error.First_Name}</p>}</div>
            </div>
            <div className="inpc">
              <input name='Last_Name' value={data.Last_Name}  onChange={(e) => change(e)} type='text' placeholder='Last Name'  />
              <div className='error'>{error.Last_Name && <p>{error.Last_Name}</p>}</div>
            </div>
            <div className="inpc">
              <input type='text'  value={data.contact_Number}  onChange={(e) => change(e)} name='contact_Number' placeholder='Contact Number' />
              <div className='error'>{error.contact_Number && <p>{error.contact_Number}</p>}</div>
            </div>
            <div className="select" >
              <select name='gender' value={data.gender}  onChange={(e) => change(e)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <div className='error'>{error.gender && <p>{error.gender}</p>}</div>
            </div>

          </div>
          <div className="right">
           
           
            <div className="select">
              <select name='type' onChange={(e) => change(e)} value={data.type}>
                <option value="Intern">Internship</option>
                <option value="Employee">Employee</option>
              </select>
              <div className='error'>{error.type && <p>{error.type}</p>}</div>
            </div>
            <div className="inpc">
              <input type='email' onChange={(e) => change(e)}  value={data.user_Email}  required name='user_Email' placeholder='Email'  />
              <div className='error'>{error.user_Email && <p>{error.user_Email}</p>}</div>
            </div>

            <div className="select">
              <select name='Experience' value={data.Experience}  onChange={(e) => change(e)}>
                <option value="Fresher">Fresher</option>
                <option value="0-2">0-2 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
              <div className='error'>{error.Experience && <p>{error.Experience}</p>}</div>
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
        <textarea  onChange={(e) => change(e)} placeholder='Describe your Experience in words...' name='Experiences' value={data.Experiences}></textarea>
        <div className='error'>{error.Experiences && <p>{error.Experiences}</p>}</div>
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


