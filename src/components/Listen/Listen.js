import React from 'react';

import VideoPlayer from './VideoPlayer/VideoPlayer';

const Listen = () => {
  const videos = [
    'gCYcHz2k5x0',
    'oC-GflRB0y4',
    '1y6smkh6c-0'
  ];
  return (
    <div className="container mt-3">
      {videos.map((video) => {
        return (
          <div
            className='card mb-3'
            key={video}
          >
            <div className="card-body _video">
              <VideoPlayer
                id={video}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listen;