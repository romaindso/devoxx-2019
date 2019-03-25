import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { fetchGameCharacters } from "../api/fetchGame";
import { Loader } from "../components/Loader";
import * as S from "./styles";

const CharactersResource = unstable_createResource(fetchGameCharacters);

export class GameCharacters extends Component {
  render() {
    const { gameId } = this.props;
    return (
      <S.GameCharacters>
        <h2>Characters</h2>
        <Suspense fallback={<Loader />}>
          <S.GameCharactersWrapper>
            {CharactersResource.read(gameId).map((character, index) => (
              <img src={character} key={index} />
            ))}
          </S.GameCharactersWrapper>
        </Suspense>
      </S.GameCharacters>
    );
  }
}
