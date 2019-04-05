import React, { Component } from "react";
import { Link } from "@reach/router";
import { fetchGameList } from "../api/fetchGame";
import { DevToolsContext } from "./DevTools";
import Loader from "./Loader";
import Gutter from "../components/Gutter";
import * as S from "./styles";

const GameItem = ({ game }) => (
  <S.Item>
    <Gutter x="left" color="#eee" step={0.5} top />
    <Gutter x="right" color="#eee" step={0.5} top />
    <S.GameCover src={game.image_url} />
    <S.GameTitle>{game.name}</S.GameTitle>
  </S.Item>
);

class GameList extends Component {
  state = {
    games: null,
    isLoading: true
  };

  static contextType = DevToolsContext;

  componentDidMount() {
    let delay = this.context;
    fetchGameList(delay).then(
      games => this.setState({ isLoading: false, games }),
      error => this.setState({ isLoading: false, error })
    );
  }

  render() {
    const { games, isLoading } = this.state;

    return (
      <S.List>
        {isLoading ? (
          <Loader />
        ) : (
          games.map(game => (
            <Link to={`/games/${game.id}/${game.name}`} key={game.id}>
              <GameItem game={game} />
            </Link>
          ))
        )}
      </S.List>
    );
  }
}
export default GameList;
