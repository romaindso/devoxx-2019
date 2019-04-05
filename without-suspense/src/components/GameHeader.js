import React, { Component } from "react";
import { fetchGameDetails } from "../api/fetchGame";
import { DevToolsContext } from "../components/DevTools";
import Loader from "../components/Loader";
import Placeholder from "../components/Placeholder";
import * as S from "./styles";

const GameCover = ({ game }) => (
  <S.GameImage src={game.image_url} alt="game cover" />
);

const GameDescription = ({ game }) => (
  <S.Container>
    <S.Row>
      {game.platforms.map(platform => (
        <S.GamePlatform key={platform}>{platform}</S.GamePlatform>
      ))}
    </S.Row>
    <p>{game.description}</p>
  </S.Container>
);

class GameHeader extends Component {
  state = {
    game: null,
    isLoading: true
  };

  static contextType = DevToolsContext;

  componentDidMount() {
    let delay = this.context;
    fetchGameDetails(this.props.gameId, delay).then(game =>
      this.setState({ isLoading: false, game })
    );
  }

  render() {
    const { game, isLoading } = this.state;

    return (
      <S.GameHeader>
        <S.RowNoWrap>
          {isLoading ? (
            <>
              <Placeholder />
              <Loader />
            </>
          ) : (
            <>
              <GameCover game={game} />
              <GameDescription game={game} />
            </>
          )}
        </S.RowNoWrap>
      </S.GameHeader>
    );
  }
}
export default GameHeader;
