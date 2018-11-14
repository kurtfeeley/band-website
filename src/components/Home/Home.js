import React from 'react';

import Hero from './Hero/Hero';
import CardList from '../CardList/CardList';

const Home = () => {
  return (
    <div>
      <Hero/>
      <div style={{ margin: '0 30px'}}>
        <CardList/>
      </div>
    </div>
  );
};

export default Home;