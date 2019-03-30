import React from "react";
import { Link } from "@reach/router";
import GameHeader from "../components/GameHeader";
import GameCharacters from "../components/GameCharacters";
import controllerUrl from "../assets/others/icon-controller.png";
import * as S from "../components/styles";

const GameDetails = ({ id, name }) => (
  <S.GameDetails>
    <S.Menu>
      <Link to="/">
        <S.IconController src={controllerUrl} />
      </Link>
    </S.Menu>
    <GameHeader gameId={id} name={name} />
    <GameCharacters gameId={id} />
  </S.GameDetails>
);

export default GameDetails;
