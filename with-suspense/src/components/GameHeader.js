import React, { Component, Fragment, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { fetchGameDetails } from "../api/fetchGame";
import { Loader } from "../components/Loader";
import { Placeholder } from "../components/Placeholder";
import * as S from "./styles";

const GameResource = unstable_createResource(fetchGameDetails);

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

export class GameHeader extends Component {
  render() {
    const { name, gameId } = this.props;
    const game = GameResource.read(gameId);

    return (
      <S.GameHeader>
        <Suspense maxDuration={1000} fallback={<Placeholder />}>
          <Img src={game.image_url} />
        </Suspense>
        <S.Container>
          <h1>{name}</h1>
          <Suspense maxDuration={1000} fallback={<Loader />}>
            <Fragment>
              <S.GamePlatformWrapper>
                {game.platforms.map(platform => (
                  <S.GamePlatform key={platform}>{platform}</S.GamePlatform>
                ))}
              </S.GamePlatformWrapper>
              <p>{game.description}</p>
            </Fragment>
          </Suspense>
        </S.Container>
      </S.GameHeader>
    );
  }
}
