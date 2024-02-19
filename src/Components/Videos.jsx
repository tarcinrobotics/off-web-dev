import React from 'react';
import ReactPlayer from 'react-player';
import "./Videos.css"

export default function Videos() {
  return (
    <div className='utube'>
      <h1>Unveiling Our Endeavours</h1>
      <br/>
      <br/>
      <div className="utube-slider" >
        <div className="utubeslide-track" style={{display:'flex'}}>
        
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=JH5zrljsc8A"  width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=wR7Dz5egYZY"   width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=fYK8m80OE_4 "  width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=QHRd9Be73tM"   width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=m591hKSRKp4 "   width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=BIT0yLznOsQ "   width={'400px'} height={'250px'}/>
          </div>
          
          
          
    
        
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=JH5zrljsc8A "  width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=wR7Dz5egYZY"  width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=fYK8m80OE_4 "  width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=QHRd9Be73tM"  width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=m591hKSRKp4 "  width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=BIT0yLznOsQ "  width={'400px'} height={'250px'}/>
          </div>
          
          
        </div>
        </div>
        </div>
  )
}
