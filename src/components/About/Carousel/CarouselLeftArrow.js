import React from 'react';

const CarouselLeftArrow = props => {
  return (
    <span
      className="fa fa-2x fa-angle-left carousel__arrow carousel__arrow--left"
      onClick={props.onClick}
    />
  );
};

export default CarouselLeftArrow;