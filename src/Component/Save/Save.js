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
          <div className="cards">
            <h4>Credit Cards Secure</h4>
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Sint, velit!</p>
          </div>
          <div className="cards">
            <h4>Credit Cards Secure</h4>
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Sint, velit!</p>
          </div>
          <button className='btn'>More Details</button>
          </div>
          <div className="s-right ">
                 <img src={image} alt="" />
          </div>
       
         </div>
  )
}

export default Save