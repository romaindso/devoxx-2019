import React from "react";
import { GameHeader } from "../components/GameHeader/";
import { GameCharacters } from "../components/GameCharacters/";
import * as S from "../components/styles";

const GameDetails = ({ id, name }) => (
  <S.GameDetails>
    <GameHeader gameId={id} name={name} />
    <GameCharacters gameId={id} />
  </S.GameDetails>
);
export default GameDetails;
