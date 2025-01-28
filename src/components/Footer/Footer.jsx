import React from 'react';
import './Footer.css';
import logo from '../../assets/logo-white.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='footer-left'>
          <img src={logo} alt='logo' className='footer-logo' />
          <p>206-555-5555</p>
          <p>info@readysound.live</p>
          <div className='footer-social'>
            <a href='https://www.facebook.com'><i className='fab fa-facebook'></i></a>
            <a href='https://www.twitter.com'><i className='fab fa-twitter'></i></a>
            <a href='https://www.instagram.com'><i className='fab fa-instagram'></i></a>
          </div>
        </div>
        <div className='footer-right'>
          <h3>Quick Links</h3>
          <a href='/'>Home</a>
          <a href='/questions'>Questions</a>
          <a href='/contact'>Contact</a>
        </div>
        <p>&copy; 2023 Ready Sound. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;