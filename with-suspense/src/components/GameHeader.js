import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { fetchGameDetails } from "../api/fetchGame";
import { DevToolsContext } from "../components/DevTools";
import Loader from "../components/Loader";
import Placeholder from "../components/Placeholder";
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
  return <S.GameImage src={src} {...props} />;
};

class GameHeader extends Component {
  state = {
    game: null,
    isLoading: true
  };

  static contextType = DevToolsContext;

  componentDidMount() {
    let delay = this.context;
    fetchGameDetails(this.props.gameId, delay).then(game =>
      this.setState({ isLoading: false, game })
    );
  }

  render() {
    const { game, isLoading } = this.state;
    const { name } = this.props;

    return (
      <S.GameHeader>
        {game && (
          <Suspense maxDuration={500} fallback={<Placeholder />}>
            <Img src={game.image_url} alt="game cover" />
          </Suspense>
        )}
        <S.Container>
          <h1>{name}</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <S.GamePlatformWrapper>
                {game.platforms.map(platform => (
                  <S.GamePlatform key={platform}>{platform}</S.GamePlatform>
                ))}
              </S.GamePlatformWrapper>
              <p>{game.description}</p>
            </>
          )}
        </S.Container>
      </S.GameHeader>
    );
  }
}
export default GameHeader;
