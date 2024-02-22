import React from 'react';
import "/src/Pages/Products.css";

export default function Product(props) {
  return (
   
 <div className='product'>
  
  <div className='inner-content' >
    <div className="inner-img">
      <img src={props.img}  width={"450px"} height={"350px"}/>
    </div>
    <div className='product-content'>
    <h1>{props.head}</h1>
    <p> {props.content}</p>
    </div>
  </div>
 </div>
    
  )
}
