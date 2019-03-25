import React, { Suspense } from "react";
import { GameList } from "../components/GameList";
import { Loader } from "../components/Loader";
import * as S from "../components/styles";
import controllerUrl from "../assets/others/icon_controller.png";

const Home = () => (
  <S.Container>
    <S.CenterV>
      <S.Title>
        <S.IconController src={controllerUrl} />
        Your Games
      </S.Title>
      <Suspense maxDuration={1000} fallback={<Loader />}>
        <GameList />
      </Suspense>
    </S.CenterV>
  </S.Container>
);
export default Home;
