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
      <ul>
      {videos.map((video) => {
        return (
          <div key={video}>
            <div>
              <VideoPlayer
                id={video}
              />
            </div>
          </div>
        );
      })}
      </ul>
    </div>
  );
};

export default Listen;