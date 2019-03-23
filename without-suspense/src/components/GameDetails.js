import React, { Component } from "react";
import { GameHeader } from "./GameHeader/";
import { GameCharacters } from "./GameCharacters/";
import { GameVideos } from "./GameVideos/";
import * as S from "./styles";

export class GameDetails extends Component {
  render() {
    const { id } = this.props;
    return (
      <S.GameDetails>
        <GameHeader gameId={id} />
        <GameCharacters gameId={id} />
        <GameVideos gameId={id} />
      </S.GameDetails>
    );
  }
}
