import React, { Component } from "react";
import { fetchGameDetails } from "../api/fetchGame";
import { DevToolsContext } from "../components/DevTools";
import Loader from "../components/Loader";
import Placeholder from "../components/Placeholder";
import * as S from "./styles";

class GameHeader extends Component {
  state = {
    game: null,
    isLoading: true
  };

  static contextType = DevToolsContext;

  componentDidMount() {
    let delay = this.context;
    fetchGameDetails(this.props.gameId, delay).then(
      game => this.setState({ isLoading: false, game }),
      error => this.setState({ isLoading: false, error })
    );
  }

  render() {
    const { game, isLoading } = this.state;
    const { name } = this.props;

    return (
      <S.GameHeader>
        {isLoading ? <Placeholder /> : <S.GameImage src={game.image_url} />}
        <S.Container>
          <h1>{name}</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <S.GamePlatformWrapper>
                {game.platforms.map(platform => (
                  <S.GamePlatform key={platform}>{platform}</S.GamePlatform>
                ))}
              </S.GamePlatformWrapper>
              <p>{game.description}</p>
            </>
          )}
        </S.Container>
      </S.GameHeader>
    );
  }
}
export default GameHeader;
