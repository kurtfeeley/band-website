import React from 'react';

import Card from '../Card/Card';

const CardList = () => {
  const contentArray = [
    'Check out some photos of me along with some of my favorite inspirational quotes.',
    'Listen and watch some of my latest music videos.',
    'You know you want that new t-shirt...',
    'Find out where my next show close to you will be. See ya there!'
  ];
  const linkTextArray = ['Meet Me', 'Listen', 'Merchandise', 'Tours'];
  const toArray = ['/about', '/music', '/merchandise', '/tours'];
  const imageArray = [
    'https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35db0a81552053921c8b59b0b267d2f3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c1e4b4793a0a08b909dc38f620b937f&auto=format&fit=crop&w=967&q=80',
    'https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acd354e782d833d351ed6b43b612ab45&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1506485854521-3e13d857db0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3cea90db846dee9ccb6a062c4b7f2864&auto=format&fit=crop&w=1489&q=80'
  ];
  const titleArray = [
    'Learn more',
    'Listen to our songs',
    'Buy some swag',
    'Upcoming shows'
  ];

  return (
    <div className="row" style={{alignItems: 'center'}}>
      {contentArray.map((content, index) =>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
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
  );
};

export default CardList;