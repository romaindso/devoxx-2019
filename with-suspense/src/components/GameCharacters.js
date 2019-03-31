import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { fetchGameCharacters } from "../api/fetchGame";
import { DevToolsContext } from "../components/DevTools";
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

const Img = ({ src, ...props }) => {
  ImageResource.read(src);
  return <img src={src} {...props} />;
};

class GameCharacters extends Component {
  state = {
    characters: null,
    isLoading: true
  };

  static contextType = DevToolsContext;

  componentDidMount() {
    let delay = this.context;
    fetchGameCharacters(this.props.gameId, delay).then(characters =>
      this.setState({ isLoading: false, characters })
    );
  }

  render() {
    const { characters } = this.state;

    return (
      <S.GameCharacters>
        <h2>Characters</h2>
        {characters && (
          <Suspense maxDuration={500} fallback={<Loader />}>
            <S.GameCharactersWrapper>
              {characters.map((character, index) => (
                <Img src={character} key={index} alt="character" />
              ))}
            </S.GameCharactersWrapper>
          </Suspense>
        )}
      </S.GameCharacters>
    );
  }
}

export default GameCharacters;
