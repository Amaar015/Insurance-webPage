import React, { useState } from 'react'
import './Header.css'
import image from './../image/logo.png';
import bars from './../image/bars.png';
const Header = () => {
  const mobile= window.innerWidth<=855?true:false;
  const [menu,Setmenu]=useState(false);
  return (
    <div className="nav">
        <div className="logo-1">
        <img src={image} alt="" className="log" />
        </div>
      {menu===false && mobile==true?(
        <div  style={{
           background:"#071b81",
           padding:'0.5rem',
           borderRadius:'5px'   }} 
           onClick={()=>{Setmenu(true)}}  >
            <img src={bars} alt="" style={{width:'1.5rem' , height:'1.5rem'}} />
        </div>
      ):
      (<ul>
        <li
        onClick={()=>{Setmenu(false)}}
        activeClass='active'
        >Learn </li>
        <li
         onClick={()=>{Setmenu(false)}}
         activeClass='active'
        >Credit Card</li>
        <li
         onClick={()=>{Setmenu(false)}}
         activeClass='active'
        >Saving</li>
        <li
         onClick={()=>{Setmenu(false)}}
         activeClass='active'
        >Life insurance</li>
        <li
         onClick={()=>{Setmenu(false)}}
         activeClass='active'
        >Credit Score</li>
        <li
         onClick={()=>{Setmenu(false)}}
         activeClass='active'
        >Loans</li>
        </ul>        )

      }
        
    </div>
  )
}

export default Header