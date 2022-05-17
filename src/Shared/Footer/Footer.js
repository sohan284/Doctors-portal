import React from 'react';
import img from './../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${img})`,
            backgroundSize: 'cover'
        }} className='bg-white text-black'>
      <div  class="footer p-10 ">
      <div>
          <span class="footer-title">SERVICES</span> 
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div> 
        <div>
          <span class="footer-title">ORAL HEALTH</span> 
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teeth Whitening</a>
        </div> 
        <div>
          <span class="footer-title">OUR ADDRESS</span> 
          <a class="link link-hover">New York - 010129 Hudson</a>
        </div>
      </div>
        <p className='text-center py-5'>Copyright © 2022 - All right reserved</p>
      </footer>
    );
};

export default Footer;