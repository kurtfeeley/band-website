import React from 'react';
import Youtube from 'react-youtube';

export const VideoPlayer = props => {

  return (
    <Youtube
      className='mr-3'
      videoId={props.id}
    />
  );
};

export default VideoPlayer;