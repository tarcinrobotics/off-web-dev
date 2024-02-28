import React from 'react';
import { FcOk } from "react-icons/fc";
import "./Learn.css"

export default function Learn(props) {
  const [display, setDisplay] = React.useState(true);
  let curs={
    cursor:props.topics? "pointer":"auto"
  } 
  let dis = props.topics ? props.topics.map((item, index) => {
    return (
      <div key={index} className='dropdow'>
      
        <ul>
        <li>{item.head}</li>
        </ul>
      </div>
    );
  }) : null;

  return (
    <div key={props.list} className='dropdown' style={curs} >
      <div className='learnnn'>
      <FcOk />
      <li onClick={() => { setDisplay(prev => !prev) }}>{props.list}</li>
      </div>
      {/* <div className="dropdowns">
      {display ? dis : null}
      </div> */}
      
    </div>
  );
}
