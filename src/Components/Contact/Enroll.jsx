import React from 'react'
import { useParams } from 'react-router-dom';
import "/src/index.css";
import data from "./coursesdata";
import { BsClockHistory } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { FcOk } from "react-icons/fc";



export default function Enroll() {
  let [display,setDisplay]=React.useState({
    learn:[]
  });
  
  
  let params=useParams();
  React.useEffect(()=>{
      data.map(data1 => {
        if(params.name == data1.id) 
        {
          setDisplay(data1) ;
         } 
     }
      );
  },[])
  let learn = display.learn.map(prev=>{
    return < div key = { prev } className='learnnn'> <FcOk /> <li >{prev}</li></div>
  })
  return (
    
    <div className="enroll">
     
        <div className="coursehead">
        <div className="enimage">
          <img src={display.imageUrl} alt="Courses image" />
          <div className="enimagecontent">
              <h2>{display.name}</h2>
              <p>{display.brief}</p>
          </div>
           
        </div>
        <div className="encontent">
          <h1>This Course Includes:</h1>
          <div className="sho">
            <BsClockHistory size={26}/>
            <h3>{display.time} Hours Course</h3>
          </div>
          <div className="sho">
              <GiNotebook size={26} />
            <h3>{display.chapter} Detailed Chapters</h3>
          </div>
          <div className="sho">
              <FaCloudDownloadAlt size={26} />
            <h3>Provided Downloadable Resources</h3></div> 
          <div className="sho">
              <MdOutlineAssignment size={26} />
            <h3>Assignments</h3>
          </div>
          <button>  <a href="https://docs.google.com/forms/d/e/1FAIpQLSer35beloWbMk39Msy6AnTaDFEv4_nFSRBN-g-cnvTbHvuV7Q/viewform?vc=0&c=0&w=1&flr=0">Enroll Course</a></button>
        </div>
      </div>
      <hr/>
      
      <div className="coursecontent">
        <h2>Couse Overview</h2>
        <p>{display.overview}</p>
      </div>
      <hr/>
      <div className="ll_learn">
        <h1>What you'll learn</h1>
          {learn}
      </div>
    </div>
  )
}
