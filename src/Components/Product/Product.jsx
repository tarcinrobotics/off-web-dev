import React from 'react';


export default function Product(props) {
  return (
 <div className='product'>
  <div className='inner-content'>
    <img src={props.img}  width={"400px"}/>
    <div className='product-content'>
    <h1>{props.head}</h1>
    <p> {props.content}</p>
    </div>
  </div>
 </div>
    
  )
}
