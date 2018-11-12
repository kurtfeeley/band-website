import React from 'react';

import Card from '../Card/Card';

const CardList = () => {
  const contentArray = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque dolorem, eaque fuga impedit ipsa officia quaerat quidem soluta temporibus!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque dolorem, eaque fuga impedit ipsa officia quaerat quidem soluta temporibus!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque dolorem, eaque fuga impedit ipsa officia quaerat quidem soluta temporibus!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque dolorem, eaque fuga impedit ipsa officia quaerat quidem soluta temporibus!'
  ];
  const linkTextArray = ['About', 'Listen', 'Merchandise', 'Tours'];
  const toArray = ['/about', '/music', '/merchandise', '/tours'];
  const imageArray = [
    'https://via.placeholder.com/100x80',
    'https://via.placeholder.com/100x80',
    'https://via.placeholder.com/100x80',
    'https://via.placeholder.com/100x80'
  ];
  const titleArray = [
    'Learn more',
    'Listen to our songs',
    'Buy some swag',
    'Find a show near you'
  ];

  return (
    <div className='container'>
      <div className="row">
        {contentArray.map((content, index) =>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              key={index}
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