import React from 'react'
import './partner.css';
import part1 from './../image/logo-1.png';
import part2 from './../image/logo-2.png';
import part3 from './../image/logo-3.png';
import part4 from './../image/logo-4.png';
import part5 from './../image/logo-5.png';
import part6 from './../image/logo-6.png';

const Partner = () => {
  return (
    <div className="partners">

       <p className='title'>Services</p>
        <h2 className="heading">Find the financial services you need</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe similique laudantium illum error tenetur ab sunt iure, adipisci molestiae,
        </p>

        <div className="images">
           <img src={part1} alt="" />
           <img src={part2} alt="" />
           <img src={part3} alt="" />
           <img src={part4} alt="" />
           <img src={part5} alt="" />
           <img src={part6} alt="" />
        </div>

        <button className='btn btn-partner'>Learn More</button>
    </div>
  )
}

export default Partner