import React from 'react';

const CarouselSlide = props => {
  return (
    <li
      className={
        props.index == props.activeIndex
          ? 'carousel__slide carousel__slide--active list-group-item'
          : 'carousel__slide list-group-item'
      }
    >
      <img className='img-fluid' src={props.slide.source} alt={props.slide.member}/>
      <p className="carousel-slide__content">
        {props.slide.snippet}
      </p>
      <p>
        <strong className="carousel-slide__author">
          {props.slide.member}
        </strong>
      </p>
    </li>
  );
};

export default CarouselSlide;