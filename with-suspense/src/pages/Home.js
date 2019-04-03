import React, { Suspense } from "react";
import * as S from "../components/styles";
import GameList from "../components/GameList";
import Loader from "../components/Loader";
import controllerUrl from "../assets/others/icon-controller.png";

const Home = () => (
  <S.Container>
    <S.Col>
      <S.Title>
        <S.IconController src={controllerUrl} />
        Your Games
      </S.Title>
      <Suspense maxDuration={500} fallback={<Loader />}>
        <GameList />
      </Suspense>
    </S.Col>
  </S.Container>
);

export default Home;
