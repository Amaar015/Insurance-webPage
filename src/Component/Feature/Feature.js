import React from 'react'
import './feature.css';
import image from './../image/insure.png'
import logo1 from './../image/logo-6.png';
import logo2 from './../image/logo-5.png';
import logo3 from './../image/logo-4.png'
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
             <img src={logo1} alt="" />
             <img src={logo2} alt="" />
             <img src={logo3} alt="" />
             </div> 
          </div>
         </div>
     
    )
}

export default Feature
