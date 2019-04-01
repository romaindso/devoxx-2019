import React from "react";
import * as S from "../components/styles";
import GameList from "../components/GameList";
import controllerUrl from "../assets/others/icon-controller.png";

const Home = () => (
  <S.Container>
    <S.Col>
      <S.Title>
        <S.IconController src={controllerUrl} />
        Your Games
      </S.Title>
      <GameList />
    </S.Col>
  </S.Container>
);

export default Home;
