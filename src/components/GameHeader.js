import React from "react";
import * as S from "./styles";

export const GameHeader = ({ game }) => (
  <S.GameHeader>
    <img src={game.image_url} />
    <S.Container>
      <h1>{game.name}</h1>
      <S.GamePlatformWrapper>
        {game.platforms.map(platform => (
          <S.GamePlatform key={platform}>{platform}</S.GamePlatform>
        ))}
      </S.GamePlatformWrapper>
    </S.Container>
  </S.GameHeader>
);
