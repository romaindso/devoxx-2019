import React, { Suspense } from "react";
import { Link } from "@reach/router";
import Gutter from "../components/Gutter";
import GameHeader from "../components/GameHeader";
import GameCharacters from "../components/GameCharacters";
import Loader from "../components/Loader";
import controllerUrl from "../assets/others/icon-controller.png";
import * as S from "../components/styles";

const GameDetails = ({ id, name }) => (
  <S.GameDetails>
    <S.Menu>
      <Link to="/">
        <Gutter y="top" right />
        <S.IconController src={controllerUrl} />
        <Gutter x="left" />
      </Link>
    </S.Menu>
    <S.GameTitle>{name}</S.GameTitle>
    <Suspense maxDuration={500} fallback={<Loader />}>
      <GameHeader gameId={id} name={name} />
      <GameCharacters gameId={id} />
    </Suspense>
  </S.GameDetails>
);

export default GameDetails;
