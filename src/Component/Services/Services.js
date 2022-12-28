import React from 'react'
import './service.css'
import features from './../Data/feature.json';
const Services = () => {
  return (
    <div className="service">
        <p className='title'>Services</p>
        <h2 className="heading">Find the financial services you need</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe similique laudantium illum error tenetur ab sunt iure, adipisci molestiae,
        </p>

        <div className="box_main">
        {features && features.map((data)=>{
    return(
             <div className="box">
             <img src={data.url} alt={data.alt} />
             <h3>{data.name}</h3>
             <p>{data.description}</p>
             </div>
                 )
                })}             
                
        </div>
    </div>
  )
}

export default Services



