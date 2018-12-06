import React from 'react';

const CarouselSlide = props => {
  return (
    <li
      className={
        props.index === props.activeIndex
          ? 'carousel__slide carousel__slide--active list-group-item'
          : 'carousel__slide list-group-item'
      }
    >
      <div className='list-group-item-light mb-2'>{ props.index + 1 } of 5</div>
      <img className='img-fluid' src={props.slide.source} alt={props.slide.title}/>
      <p className="carousel-slide__content">
        {props.slide.snippet}
      </p>
      <p>
        <strong className="carousel-slide__author">
          {props.slide.title}
        </strong>
      </p>
    </li>
  );
};

export default CarouselSlide;