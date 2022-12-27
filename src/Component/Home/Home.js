import React from 'react'
import Header from '../Header/Header';
import './home.css';
import home from './../image/home.png';
const Home = () => {
  return (
 <div className="home">
  <Header/>
   <div className="main">
    <div className="left-home">
      <p>About</p>
      <span>Your credit scores</span>
      <span>should be free.</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quo amet magni sint 
        molestiae eveniet dignissimos! Repellendus.
      </p>
      <form action="">
        {/* <div className="input"> */}
        <input list="logins" placeholder='Login purpose' name="login" id="login"/>
        <datalist id="logins"  >
            <option value="purpose"></option>
            <option value="Vission"></option>
            <option value="Mission"></option> 
        </datalist>
        {/* </div> */}
        <input type="button" className='btn' value="Continue" />
      </form>
    </div>
    <div className="right-home">
         <img src={home} alt="" />
    </div>
   </div>
 </div>
  )
}

export default Home