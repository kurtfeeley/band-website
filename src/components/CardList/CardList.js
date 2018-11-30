import React from 'react';

import Card from '../Card/Card';

import firstCard from '../../assets/images/1stCard.jpeg';
import secondCard from '../../assets/images/2ndCard.jpeg';
import thirdCard from '../../assets/images/3rdCard.jpeg';
import fourthCard from '../../assets/images/4thCard.jpeg';

const CardList = () => {
  const contentArray = [
    'Check out some photos of me and some of my favorite things and activities.',
    'Listen and watch some of my latest music videos.',
    'You know you want that new t-shirt...',
    'Find out where my next show close to you will be. See ya there!'
  ];
  const linkTextArray = ['Meet Me', 'Listen', 'Merchandise', 'Tours'];
  const toArray = ['/about', '/music', '/merchandise', '/tours'];
  const imageArray = [firstCard, secondCard, thirdCard, fourthCard];
  const titleArray = [
    'Learn more',
    'Listen to our songs',
    'Buy some swag',
    'Upcoming shows'
  ];

  return (
    <div className="row" style={{ alignItems: 'center' }}>
      <div className="card-deck">
        {contentArray.map((content, index) =>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3" key={index}>
            <Card
              content={content}
              linkText={linkTextArray[index]}
              to={toArray[index]}
              image={imageArray[index]}
              title={titleArray[index]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;