import React, { Component, Fragment } from "react";
import { fetchGameDetails } from "../api/fetchGame";
import * as S from "./styles";

export class GameHeader extends Component {
  state = {
    game: null,
    isLoading: true
  };

  componentDidMount() {
    fetchGameDetails(this.props.gameId).then(
      game => this.setState({ isLoading: false, game }),
      error => this.setState({ isLoading: false, error })
    );
  }

  render() {
    const { game, isLoading } = this.state;

    return (
      <S.GameHeader>
        {isLoading ? (
          "loading..."
        ) : (
          <Fragment>
            <img src={game.image_url} />
            <S.Container>
              <h1>{game.name}</h1>
              <S.GamePlatformWrapper>
                {game.platforms.map(platform => (
                  <S.GamePlatform key={platform}>{platform}</S.GamePlatform>
                ))}
              </S.GamePlatformWrapper>
              <p>{game.description}</p>
            </S.Container>
          </Fragment>
        )}
      </S.GameHeader>
    );
  }
}
