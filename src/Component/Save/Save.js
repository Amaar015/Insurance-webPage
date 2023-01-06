import React from 'react'
import './save.css';
import image from './../image/save.png'
const Save = () => {
  return (
    <div className="feature safety">
          <div className="s-left">
          <p className='title t-safety'>Safetey</p>
          <span>Your cards scores always</span> 
          <span className='top'>Safe and Secure</span>
          </div>
          <div className="s-right ">
                 <img src={image} alt="" />
          </div>
       
         </div>
  )
}

export default Save