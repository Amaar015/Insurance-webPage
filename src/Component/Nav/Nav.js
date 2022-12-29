import React from 'react'
import './../../App.css';
import {AiOutlineBars} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
import {FaShoppingCart,FaHeart,FaUserCircle} from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

const Nav = () => {
                    const [click,setClick]=useState(false);
                    return (
               <div className='navbar'>
                      <nav className='flexSB'>
               
                           <ul className={click?'mobile-nav':'flexSB'} onClick={()=>setClick(false)}>
               
                                   <li><Link to='/'>Home</Link></li>
                                   <li><Link to='/Category'>Category</Link></li>
                                   <li><Link to='/Product'>Product</Link></li>
                                   <li><Link to='/Deal'>Deal</Link></li>
                                   <li><Link to='/Contact'>Contact</Link></li>
                                
                                   </ul> 
                                   <div className='start'>
                                                       <FaShoppingCart className='i'/>
                                                       <FaHeart className='i'/>
                                                       <FaUserCircle className='i'/>
                                                </div>
                                       <button className='toggle' onClick={()=>setClick(!click)}>
                                            {click?<ImCross/>:<AiOutlineBars/>}
               
                                       </button>
                  
                      </nav>
                      <Outlet />
                 </div>
                 )
               }
               
export default Nav