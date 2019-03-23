import React, { Component } from "react";
import { fetchGameVideos } from "../api/fetchGame";
import { DevToolsContext } from "../components/DevTools";
import * as S from "./styles";

export class GameVideos extends Component {
  state = {
    videos: null,
    isLoading: true
  };

  static contextType = DevToolsContext;

  componentDidMount() {
    let delay = this.context;
    fetchGameVideos(this.props.gameId, delay).then(
      videos => this.setState({ isLoading: false, videos }),
      error => this.setState({ isLoading: false, error })
    );
  }

  render() {
    const { videos, isLoading } = this.state;

    return (
      <S.GameVideos>
        <h2>Videos</h2>
        {isLoading ? (
          "loading..."
        ) : (
          <S.GameVideosWrapper>
            {videos.map((video, index) => (
              <video
                src={`${video}&html5=true`}
                key={index}
                controls="controls"
                width="400"
                height="320"
              />
            ))}
          </S.GameVideosWrapper>
        )}
      </S.GameVideos>
    );
  }
}
