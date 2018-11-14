import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="social">
        <a href='https://facebook.com' className='social-icon'>
          <i className="fab fa-facebook-square 3x"/>
        </a>
        <a href='https://instagram.com' className='social-icon'>
          <i className="fab fa-instagram 3x"/>
        </a>
        <a href='https://youtube.com' className='social-icon'>
          <i className="fab fa-youtube-square 3x"/>
        </a>
      </div>
      <div className="copyright">
        <small>
          Copyright 2018
        </small>
      </div>
    </footer>
  );
};

export default Footer;