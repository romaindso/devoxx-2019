import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { fetchGameDetails } from "../api/fetchGame";
import Placeholder from "../components/Placeholder";
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

const GameCover = ({ game }) => <Img src={game.image_url} alt="game cover" />;

const GameDescription = ({ game }) => (
  <S.Container>
    <S.Row>
      {game.platforms.map(platform => (
        <S.GamePlatform key={platform}>{platform}</S.GamePlatform>
      ))}
    </S.Row>
    <p>{game.description}</p>
  </S.Container>
);

class GameHeader extends Component {
  render() {
    const { gameId } = this.props;
    const game = GameResource.read(gameId);

    return (
      <S.GameHeader>
        <S.RowNoWrap>
          <Suspense maxDuration={1000} fallback={<Placeholder />}>
            <GameCover game={game} />
          </Suspense>
          <GameDescription game={game} />
        </S.RowNoWrap>
      </S.GameHeader>
    );
  }
}
export default GameHeader;
