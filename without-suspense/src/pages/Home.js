import React from "react";
import { Link } from "@reach/router";
import * as S from "../components/styles";
import games from "../api/data/games";
import controller_url from "../assets/others/icon_controller.png";

const GameItem = ({ game }) => (
  <S.Item>
    <S.GameCover src={game.image_url} />
    <S.GameTitle>{game.name}</S.GameTitle>
  </S.Item>
);

const GameList = () => (
  <S.List>
    {games.map(game => (
      <Link to={`/games/${game.id}`} key={game.id}>
        <GameItem game={game} />
      </Link>
    ))}
  </S.List>
);

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
