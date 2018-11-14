import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <img
          className="img-fluid"
          src={logo}
          alt="artist logo"
          style={{
            width: '60%'
          }}
        />
        <hr className="my-4 bg-white"/>
        <h1 className='display-4 mb-3'>Be the revolution...</h1>
        <Link className="btn btn-danger btn-lg" to='/music' role="button">Listen now</Link>
      </div>
    </div>
  );
};

export default Hero;