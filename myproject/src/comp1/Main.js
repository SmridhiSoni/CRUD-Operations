import React from 'react'
import v2 from '../assets/v2.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={v2} autoPlay loop muted />
        <div className="content">
           
        </div>
    </div>
  )
}

export default Main