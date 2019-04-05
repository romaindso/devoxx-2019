import React from "react";
import { Link } from "@reach/router";
import Gutter from "../components/Gutter";
import GameHeader from "../components/GameHeader";
import GameCharacters from "../components/GameCharacters";
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
    <GameHeader gameId={id} name={name} />
    <GameCharacters gameId={id} />
  </S.GameDetails>
);

export default GameDetails;
