import React, { useState } from 'react'
import './Header.css'
import image from './../image/logo.png';
import {ImCross} from 'react-icons/im';
import {AiOutlineBars} from 'react-icons/ai'
// import bars from './../image/bars.png';
const Header = () => {
  const [click,SetClick]=useState(false);
  return (
    
    <div className="nav">
        <div className="logo-1">
        <img src={image} alt="" className="log" />
        </div>
     <ul className={click?'mobile':'navbar'} onClick={()=>SetClick(false)}>
        <li>Learn </li>
        <li>Credit Card</li>
        <li>Saving</li>
        <li>Life insurance</li>
        <li>Credit Score</li>
        <li>Loans</li>
        </ul> 

        <button className='toggle' onClick={()=>SetClick(!click)}>
                                            {click?<ImCross/>:<AiOutlineBars/>}
               
                                       </button>
        </div>
  )
}

export default Header