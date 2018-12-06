import React from 'react';

import Carousel from '../../components/Carousel/Carousel';

import djAerostar from '../../assets/images/djAeroStar.jpeg';
import dog from '../../assets/images/dog.jpeg';
import fans from '../../assets/images/fans.jpeg';
import grayScale from '../../assets/images/grayscaleTurnTables.jpeg';
import soundBoard from '../../assets/images/soundBoard.jpeg';


// Data for carousel
const slides = [
  {
    snippet:
      "Hi, this is a picture of me in my natural habitat. I was prepping for a show in Las Vegas when this was taken.",
    title: "Natural Habitat",
    source: djAerostar
  }, {
    snippet:
      "This is my Pug, Yoda. You see the similarity, right?",
    title: "The force is strong with this one",
    source: dog
  }, {
    snippet:
      "Here is a picture of some of my favorite people, my fans. I've got the best fans in the world!",
    title: "Only the best",
    source: fans
  }, {
    snippet:
      "This is me when after I first got signed. I saved for YEARS to get this turn table!",
    title: "In the beginning",
    source: grayScale
  }, {
    snippet:
      "This is now what I've got in my Home Studio. I couldn't have done it without my fans.",
    title: "Then I upgraded",
    source: soundBoard
  }
];

const About = () => {
  return (
    <div className='container card mt-3'>
      <h2 className="text-center mt-3">About me</h2>
      <Carousel slides={slides}/>
    </div>
  );
};

export default About;