import React, { Component } from 'react';

import Youtube from 'react-youtube';

class Listen extends Component {

  state = {
    width: 0,
    height: 0
  };

  updateDimensions = () => {
    const width = document.getElementById('videoContainer').getBoundingClientRect().width - 70;
    const height = width / 2;

    this.setState(() => ({width, height}));
  };

  componentDidMount () {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    const videos = [
      'gCYcHz2k5x0',
      'oC-GflRB0y4',
      '1y6smkh6c-0'
    ];

    const { width, height } = this.state;

    return (
      <div id='videoContainer' className="container mt-3">
        <ul className='list-group'>
          {videos.map((video) => {
            return (
              <li key={video} className='list-group-item'>
                <div className="img-fluid">
                  <Youtube
                    videoId={video}
                    opts={{
                      width: width,
                      height: height
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
}

export default Listen;