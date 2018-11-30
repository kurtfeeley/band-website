import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="social">
        <a href='https://www.facebook.com/djaerostar.aerostar.9' className='social-icon'>
          <i className="fab fa-facebook-square 3x"/>
        </a>
        <a href='https://www.instagram.com/djaerostar/' className='social-icon'>
          <i className="fab fa-instagram 3x"/>
        </a>
        <a href='https://www.youtube.com/channel/UCQYRpseK_F16xFWfakkrLIA' className='social-icon'>
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