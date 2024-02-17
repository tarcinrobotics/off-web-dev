import React from 'react';
import ReactPlayer from 'react-player';
import "./Videos.css"

export default function Videos() {
  return (
    <div className='utube'>
      <h1>OUR INSTITUTIONAL PARTNERS</h1>
      <h6>More than 20+ Institutions Signed "MOU"</h6><br/><br/><br/><br/>
      <div className="utube-slider" >
        <div className="utubeslide-track" style={{display:'flex'}}>
        
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=JH5zrljsc8A"  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=wR7Dz5egYZY"  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=fYK8m80OE_4 "  controls={true}width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=QHRd9Be73tM"  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=m591hKSRKp4 "  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=BIT0yLznOsQ "  controls={true} width={'400px'} height={'250px'}/>
          </div>
          
          
          
    
        
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=JH5zrljsc8A "  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=wR7Dz5egYZY"  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=fYK8m80OE_4 "  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=QHRd9Be73tM"  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=m591hKSRKp4 "  controls={true} width={'400px'} height={'250px'}/>
          </div>
          <div className="slide">
          <ReactPlayer url="https://www.youtube.com/watch?v=BIT0yLznOsQ "  controls={true} width={'400px'} height={'250px'}/>
          </div>
          
          
        </div>
        </div>
        </div>
  )
}
