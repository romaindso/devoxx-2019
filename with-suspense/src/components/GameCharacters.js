import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { fetchGameCharacters } from "../api/fetchGame";
import { Loader } from "../components/Loader";
import * as S from "./styles";

const CharactersResource = unstable_createResource(fetchGameCharacters);

const ImageResource = unstable_createResource(
  src =>
    new Promise(resolve => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
    })
);

const Img = ({ src, ...props }) => {
  ImageResource.read(src);
  return <img src={src} {...props} />;
};

export class GameCharacters extends Component {
  render() {
    const { gameId } = this.props;

    return (
      <S.GameCharacters>
        <h2>Characters</h2>
        {/* <Suspense maxDuration={1000} fallback={<Loader />}> */}
        <S.GameCharactersWrapper>
          {CharactersResource.read(gameId).map((character, index) => (
            <img src={character} key={index} />
            // <Img src={character} key={index} />
          ))}
        </S.GameCharactersWrapper>
        {/* </Suspense> */}
      </S.GameCharacters>
    );
  }
}
