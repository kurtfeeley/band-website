import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">DJ Aerostar</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <hr className="my-4 bg-white"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Link className="btn btn-danger btn-lg" to='/music' role="button">Listen now</Link>
      </div>
    </div>
  );
};

export default Hero;