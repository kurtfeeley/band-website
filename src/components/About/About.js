import React from 'react';

import Carousel from './Carousel/Carousel';


// Data for carousel
const slides = [
  {
    snippet:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    title: "Bane",
    source: "https://via.placeholder.com/1000x600"
  }, {
    snippet:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    title: "Ra's Al Ghul",
    source: "https://via.placeholder.com/1000x600"
  }, {
    snippet:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    title: "Joker",
    source: "https://via.placeholder.com/1000x600"
  }, {
    snippet:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    title: "Bruce Wayne",
    source: "https://via.placeholder.com/1000x600"
  }, {
    snippet:
      "But it's not who you are underneath... it's what you do that defines you.",
    title: "Rachel Dawes",
    source: "https://via.placeholder.com/1000x600"
  }
];

const About = () => {
  return (
    <div>
      <Carousel slides={slides}/>
    </div>
  );
};

export default About;