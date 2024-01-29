import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './Pages/Nav';
import Courses from './Pages/Courses';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Enroll from "./Components/Contact/Enroll";
import ScrollonTop from './Components/ScrollonTop';


export default function App() {
  return (
    <BrowserRouter>
    <ScrollonTop/>
      <Routes>
        
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='courses' element={<Courses />} />
            <Route path='courses/:name' element={<Enroll />} />
      
          <Route path='about' element={<About />} />
          <Route path='contact-us' element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
