import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "../index.css";
import logo from "../images/Logo_T.png"
import {RiMenu3Line,RiCloseLine} from "react-icons/ri"
import Footer from '../Components/Footer';


export default function Nav() {
 let [toggle,setToggle]=React.useState(false);
  return (
    <div >
      <div className="nav">
      <div className='navbars '>
        <ul className=' sec_pading'>
         <li><NavLink className={({ isActive }) => isActive ? "act" : null} to=".">Home</NavLink></li>
         <li><NavLink className={({ isActive }) => isActive ? "act" : null} to="courses">Courses</NavLink></li>
         <li> <NavLink className={({ isActive }) => isActive ? "act" : null} to="about">About Us</NavLink></li>
        </ul>
        </div>
        <div className='logo'><img src={logo}/> <h1>Tarcin</h1></div>
      <div className='navbtn'>
        <div onClick={() => setToggle(prev => !prev)}>     
          {toggle ?  <h4>Close</h4>:<h4>Menu</h4> }
        </div>
   
          {toggle && 
            <ul className={toggle ?"navmob active" : "navmob"}>
            <li><NavLink onClick={() => setToggle(prev => !prev)} className={({ isActive }) => isActive ? "act" : null} to=".">Home</NavLink></li>
            <li><NavLink onClick={() => setToggle(prev => !prev)} className={({ isActive }) => isActive ? "act" : null} to="courses">Courses</NavLink></li>
            <li> <NavLink onClick={() => setToggle(prev => !prev)} className={({ isActive }) => isActive ? "act" : null} to="about">About Us</NavLink></li></ul>
          }
        </div>
        </div>
   
      
      <Outlet />
   <Footer/>
    </div>
  )
}
