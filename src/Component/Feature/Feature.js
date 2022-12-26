import React from 'react'
import './feature.css';
import features from './../Data/feature.json'
const Feature = () => {
  return (
   <div>
    {features && features.map((data)=>{
        return(
         <div>
            <img src={data.url} alt={data.alt} />
            <p>{data.description}</p>
         </div>
        )
    })
    }
   </div>
    )
}

export default Feature