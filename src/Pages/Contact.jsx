import React from 'react';
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import t from "../images/Logo_T.png"
import "../index.css";

export default function Contact() {
  const form = React.useRef();
  let [data, setData] = React.useState({
    user_Name: "",
    phone_Number: "",
    user_Email: "",
    message: "",
    questions: ""
  })
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
    user_Name: yup.string().matches(/^[A-Za-z]+$/,"User Name cannot be Number").required("User Name is required"),
    phone_Number: yup.string().matches(/^\d{10}$/,"Phone Number Should be 10 numbers").required("PhoneNumber is required"),
    user_Email: yup.string().matches((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/),"Invalid Email Format").email("Invalid Email Format").required("Email is required"),
    message: yup.string().min(10,"Subject Should be mininum 10 characters").matches(/^[a-zA-Z0-9,'" ]*$/,"Subject cannot be Number ").required("Subject is required"),
    questions: yup.string().min(10,"Question Should be mininum 10 characters").matches(/^[a-zA-Z0-9,'" ]*$/,"Question cannot be Number ").required("Question is required")



  })
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await validation.validate(data, { abortEarly: false });
      console.log("success full");
      let result = await emailjs.sendForm('service_sqwwc8x', 'template_sfknxg9', form.current, 'ymgKPBD3AHSbELqzY');
      alert("Your email sent successfully");
      setData({
        user_Name: "",
        phone_Number: "",
        user_Email: "",
        message: "",
        questions: ""
      });
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
    <div className='contact'>
      <div className="contimg">
        <h2>CONTACT US</h2>
        <img src={t} alt='T image' />
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="msg">
          <div className="inp">
            <label >Your Name</label>
            <input name='user_Name' value={data.user_Name} onChange={(e) => change(e)} type='text' className="column" />
            
          </div>
          <div className='error'>{error.user_Name && <p>{error.user_Name}</p>}</div>
        </div>
        <div className="msg">
          <div className="inp">
            <label>Phone Number</label>
            <input type='text' name='phone_Number' onChange={(e) => change(e)} value={data.phone_Number} />
          </div>
          <div className='error'>{error.phone_Number && <p>{error.phone_Number}</p>}</div>
        </div>
        <div className="msg">
          <div className="inp">
            <label>Your Email</label>
            <input type='email' value={data.user_Email} onChange={(e) => change(e)} name='user_Email' />
          </div>
          <div className='error'>{error.user_Email && <p>{error.user_Email}</p>}</div>
        </div>
        <div className="msg">
          <div className="inp">
            <label>Subject</label>
            <input type='text' value={data.message} onChange={(e) => change(e)} name='message' />
          </div>
          <div className='error'>{error.message && <p>{error.message}</p>}</div>
        </div>
        <div className="msg">
          <div className="inp">
            <label>Your Question</label>
            <textarea name='questions' onChange={(e) => change(e)} value={data.questions}></textarea>
          </div>
          <div className='error'>{error.questions && <p>{error.questions}</p>}</div>
        </div>
        <div className='contbtn'>        <button>Submit</button></div>

      </form>

    </div>
  )
}


