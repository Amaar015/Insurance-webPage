import React from 'react'
import './Header.css'
import image from './../image/logo.png';
const Header = () => {
  return (
    <div className="nav">
        <div className="logo-1">
        <img src={image} alt="" className="log" />
        </div>
        <ul>
        <li>Learn </li>
        <li>Credit Card</li>
        <li>Saving</li>
        <li>Life insurance</li>
        <li>Credit Score</li>
        <li>Loans</li>
        </ul>        

    </div>
  )
}

export default Header