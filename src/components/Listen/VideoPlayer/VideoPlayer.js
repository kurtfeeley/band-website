import React, { Component } from 'react';
import Youtube from 'react-youtube';

class VideoPlayer extends Component {
  state = {
    width: 0,
    height: 0
  };

  componentDidMount () {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState(() => ({
      width: document.getElementsByClassName('video-cont')[0].style.maxWidth,
      height: document.getElementsByClassName('video-cont')[0].style.maxHeight
    }));
  };

  render () {
    console.log(document.getElementsByClassName('container'))
    return (
      <div className='video-cont' style={{maxWidth: '1140px', maxHeight: '500px'}}>
        <Youtube
          videoId={this.props.id}
          opts={{
            width: this.state.width,
            height: this.state.height
          }}
        />
      </div>
    );
  }
}

export default VideoPlayer;