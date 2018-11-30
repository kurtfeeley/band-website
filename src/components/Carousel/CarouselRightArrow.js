import React from 'react';

const CarouselRightArrow = props => {
  return (
      <span
        className="fa fa-2x fa-angle-right carousel__arrow carousel__arrow--right"
        onClick={props.onClick}
      />
  );
};

export default CarouselRightArrow;