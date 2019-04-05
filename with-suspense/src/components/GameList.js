import React, { Component } from "react";
import { unstable_createResource } from "react-cache";
import { Link } from "@reach/router";
import { fetchGameList } from "../api/fetchGame";
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

const GamesResource = unstable_createResource(fetchGameList);

class GameList extends Component {
  render() {
    const games = GamesResource.read();

    return (
      <S.List>
        {games.map(game => (
          <Link to={`/games/${game.id}/${game.name}`} key={game.id}>
            <GameItem game={game} />
          </Link>
        ))}
      </S.List>
    );
  }
}
export default GameList;
