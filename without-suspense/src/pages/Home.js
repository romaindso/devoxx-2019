import React from "react";
import Gutter from "../components/Gutter";
import GameList from "../components/GameList";
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
      <GameList />
    </S.Col>
  </S.Container>
);

export default Home;
