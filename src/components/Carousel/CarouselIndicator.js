import React from 'react';

const CarouselIndicator = props => {
  return (
    <li
      className={
        props.index === props.activeIndex
          ? 'carousel__indicator carousel__indicator--active'
          : 'carousel__indicator'
      }
      onClick={props.onClick}
    />
  );
};

export default CarouselIndicator;
