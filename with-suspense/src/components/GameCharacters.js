import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { fetchGameCharacters } from "../api/fetchGame";
import Loader from "../components/Loader";
import * as S from "./styles";

const ImageResource = unstable_createResource(
  src =>
    new Promise(resolve => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
    })
);

const Img = ({ src, alt, ...props }) => {
  ImageResource.read(src);
  return <img src={src} alt={alt} {...props} />;
};

const CharactersResource = unstable_createResource(fetchGameCharacters);

class GameCharacters extends Component {
  render() {
    const { gameId } = this.props;

    return (
      <S.GameCharacters>
        <h2>Characters</h2>
        <Suspense maxDuration={500} fallback={<Loader />}>
          <S.Row>
            {CharactersResource.read(gameId).map((character, index) => (
              <Img src={character} key={index} alt="character" />
            ))}
          </S.Row>
        </Suspense>
      </S.GameCharacters>
    );
  }
}

export default GameCharacters;
