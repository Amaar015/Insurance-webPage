import React from 'react'
import './feature.css';
import image from './../image/img.png'
import adidas from './../image/adidas.png';
import nb from './../image/nb.png';
import nike from './../image/nike.png'
const Feature = () => {
  return (
         <div className="feature">
          <div className="f-left">
                 <img src={image} alt="" />
          </div>
          <div className="f-right">
          <p className='title offer'>Offers</p>
          <span>Find top credit card offer </span> 
          <span className='top'>from out partners</span> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Saepe similique laudantium illum error tenetur ab sunt iure, adipisci molestiae,
           </p>
           <div className="partner">
             <img src={adidas} alt="" />
             <img src={nb} alt="" />
             <img src={nike} alt="" />
             </div> 
          </div>
         </div>
     
    )
}

export default Feature
