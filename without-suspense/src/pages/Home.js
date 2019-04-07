import React, { Component } from "react";
import { Link } from "@reach/router";
import { fetchGameList } from "../api/fetchGame";
import { DevToolsContext } from "../components/DevTools";
import Gutter from "../components/Gutter";
import Loader from "../components/Loader";
import controllerUrl from "../assets/others/icon-controller.png";
import * as S from "../components/styles";

const GameItem = ({ game }) => (
  <S.Item>
    <Gutter x="left" color="#eee" step={0.5} top />
    <Gutter x="right" color="#eee" step={0.5} top />
    <S.GameItemCover src={game.image_url} />
    <S.GameItemTitle>{game.name}</S.GameItemTitle>
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
    fetchGameList(delay).then(games =>
      this.setState({ isLoading: false, games })
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

const Home = () => (
  <S.Container>
    <S.Col>
      <S.HomeTitleWrapper>
        <S.HomeTitle>
          <S.IconController src={controllerUrl} />
          My Games
        </S.HomeTitle>
        <Gutter x="left" step={2} bottom />
        <Gutter x="right" step={2} bottom />
      </S.HomeTitleWrapper>
      <GameList />
    </S.Col>
  </S.Container>
);

export default Home;
