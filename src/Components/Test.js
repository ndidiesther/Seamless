import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';


function Test() {


    return (
        <div className='header'>
            
            <div className="logo">Tasty</div>
        <input type="checkbox" name="chk" id="chk" />
        <label htmlFor='chk' className="show"><i className="fa fa-bars"></i> </label>
           <div className="menu">
            <NavLink to="/" className="menu-item na">Home</NavLink>
            <NavLink to="about" className="menu-item na">About Us</NavLink>
            <NavLink to="/menu" className="menu-item na">Menu</NavLink>
            <NavLink to="contact" className="menu-item na">Contact</NavLink>
        
            <label htmlFor='chk' className="na hide"><i className="fa fa-times"></i> </label>
            
           </div>
           <div className="nav_sub">
          <p>Paragraph</p>
          <input type="checkbox" name="chk" id="chk" />
          <label htmlFor="chk" className="show">
            <i className="fa-solid fa-bars"></i>
          </label>
          <div className="menu">
            <ul>
              <li>Home - Classic</li>
              <li>Tailoring</li>
              <li>Laundry</li>
              <li>Login</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>

            <div className="social_list">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          <label htmlFor="chk" className="na hide">
            <i className="fa fa-times"></i>{" "}
          </label>
        </div>
          
        </div>
    )
}

export default Test
