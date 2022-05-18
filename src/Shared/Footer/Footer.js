import React from 'react';
import img from './../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${img})`,
            backgroundSize: 'cover'
        }} className='bg-white text-black'>
      <div  className="footer p-10 ">
      <div>
          <span className="footer-title">SERVICES</span> 
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div> 
        <div>
          <span className="footer-title">ORAL HEALTH</span> 
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teeth Whitening</a>
        </div> 
        <div>
          <span className="footer-title">OUR ADDRESS</span> 
          <a className="link link-hover">New York - 010129 Hudson</a>
        </div>
      </div>
        <p className='text-center py-5'>Copyright © 2022 - All right reserved</p>
      </footer>
    );
};

export default Footer;