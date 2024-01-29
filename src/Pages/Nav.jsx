import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "../index.css";
import {RiMenu3Line,RiCloseLine} from "react-icons/ri"
import Footer from '../Components/Footer';


export default function Nav() {
 let [toggle,setToggle]=React.useState(false);
  return (
    <div  >
      <div className='navbars '>
        <ul className=' sec_pading'>
         <li><NavLink className={({ isActive }) => isActive ? "act" : null} to=".">Home</NavLink></li>
         <li><NavLink className={({ isActive }) => isActive ? "act" : null} to="courses">Courses</NavLink></li>
         <li> <NavLink className={({ isActive }) => isActive ? "act" : null} to="about">About Us</NavLink></li>
        </ul>
        </div>
      <div className='navbtn gradient'  >
        <div onClick={() => setToggle(prev => !prev)}>     
          {toggle ? <RiCloseLine size={27} color='white' /> : <RiMenu3Line size={27} color='white' />}
        </div>
   
          {toggle && 
            <ul className='navmob scale-up-center'>
            <li><NavLink onClick={() => setToggle(prev => !prev)} className={({ isActive }) => isActive ? "act" : null} to=".">Home</NavLink></li>
            <li><NavLink onClick={() => setToggle(prev => !prev)} className={({ isActive }) => isActive ? "act" : null} to="courses">Courses</NavLink></li>
            <li> <NavLink onClick={() => setToggle(prev => !prev)} className={({ isActive }) => isActive ? "act" : null} to="about">About Us</NavLink></li></ul>
          }
        </div>
   
      
      <Outlet />
   <Footer/>
    </div>
  )
}
