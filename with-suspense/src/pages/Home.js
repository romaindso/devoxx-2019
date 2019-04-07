import React, { Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { Link } from "@reach/router";
import { fetchGameList } from "../api/fetchGame";
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

const GamesResource = unstable_createResource(fetchGameList);

const GameList = () => {
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
};

const Home = () => (
  <S.Container>
    <S.Col>
      <S.HomeTitleWrapper>
        <S.HomeTitle>
          <S.IconController src={controllerUrl} />
          My Games
        </S.HomeTitle>
        <Gutter x="left" bottom />
        <Gutter x="right" bottom />
      </S.HomeTitleWrapper>
      <Suspense maxDuration={500} fallback={<Loader />}>
        <GameList />
      </Suspense>
    </S.Col>
  </S.Container>
);

export default Home;
