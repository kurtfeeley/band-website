import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card" style={{width: '18rem;'}}>
      <img className="card-img-top" src={ props.image } alt="Storm image" />
        <div className="card-body">
          <h5 className="card-title">{ props.title }</h5>
          <p className="card-text">
            { props.content }
          </p>
          <Link to={ props.to } className="btn btn-danger">{ props.linkText }</Link>
        </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Card;