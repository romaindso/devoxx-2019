import React, { Suspense } from "react";
import Gutter from "../components/Gutter";
import GameList from "../components/GameList";
import Loader from "../components/Loader";
import controllerUrl from "../assets/others/icon-controller.png";
import * as S from "../components/styles";

const Home = () => (
  <S.Container>
    <S.Col>
      <S.HomeTitleWrapper>
        <S.HomeTitle>
          <S.IconController src={controllerUrl} />
          My Games
        </S.HomeTitle>
        <Gutter x="left" step={2} />
        <Gutter x="right" step={2} />
      </S.HomeTitleWrapper>
      <Suspense maxDuration={500} fallback={<Loader />}>
        <GameList />
      </Suspense>
    </S.Col>
  </S.Container>
);

export default Home;
