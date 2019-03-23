import React, { Component } from "react";
import { Link } from "@reach/router";
import * as S from "../components/styles";
import { fetchGameList } from "../api/fetchGame";
import { DevToolsContext } from "../components/DevTools";
import controller_url from "../assets/others/icon_controller.png";

const GameItem = ({ game }) => (
  <S.Item>
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
        {isLoading
          ? "loading..."
          : games.map(game => (
              <Link to={`/games/${game.id}`} key={game.id}>
                <GameItem game={game} />
              </Link>
            ))}
      </S.List>
    );
  }
}

export const Home = () => (
  <S.Container>
    <S.CenterV>
      <S.Title>
        <S.IconController src={controller_url} />
        Your Games
      </S.Title>
      <GameList />
    </S.CenterV>
  </S.Container>
);
