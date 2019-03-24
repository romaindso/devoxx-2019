import React from "react";
import * as S from "../components/styles";
import { GameList } from "../components/GameList";
import controllerUrl from "../assets/others/icon_controller.png";

const Home = () => (
  <S.Container>
    <S.CenterV>
      <S.Title>
        <S.IconController src={controllerUrl} />
        Your Games
      </S.Title>
      <GameList />
    </S.CenterV>
  </S.Container>
);
export default Home;
