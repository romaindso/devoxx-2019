import React, { Suspense } from "react";
import { Loader } from "../components/Loader";
import { GameHeader } from "../components/GameHeader/";
import { GameCharacters } from "../components/GameCharacters/";
import * as S from "../components/styles";

const GameDetails = ({ id, name }) => (
  <S.GameDetails>
    <Suspense maxDuration={1000} fallback={<Loader />}>
      <GameHeader gameId={id} name={name} />
      <GameCharacters gameId={id} />
    </Suspense>
  </S.GameDetails>
);

export default GameDetails;
