import React, { Component } from "react";

import Youtube from "react-youtube";

class Listen extends Component {
  state = {
    width: 0,
    height: 0,
    ytVideoIds: []
  };

  updateDimensions = () => {
    const width =
      document.getElementById("videoContainer").getBoundingClientRect().width -
      70;
    const height = width / 2;

    this.setState(() => ({ width, height }));
  };

  getVideoList = () => {
    const ids = [];
    const url =
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAyhsCWS9QhSxevIHMFNew9Ad6bGXWa-GM&channelId=UCQYRpseK_F16xFWfakkrLIA&part=snippet,id&order=date&maxResults=20`;
    fetch(url)
      .then(resp => resp.json())
      .then(resp =>
        resp.items.map(item => {
          ids.push(item.id.videoId);
          return this.setState({ ytVideoIds: ids });
        })
      );
  };

  componentDidMount() {
    this.getVideoList();
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { width, height, ytVideoIds } = this.state;
    return (
      <div id="videoContainer" className="container card mt-3">
        <h2 className="text-center mt-3">Watch my recent videos</h2>
        <ul className="list-group mt-3">
          {ytVideoIds.map(video => {
            return (
              <li key={video} className="list-group-item">
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
  }
}

export default Listen;
