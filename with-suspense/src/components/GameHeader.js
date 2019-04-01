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

const GameCover = ({ game }) => <Img src={game.image_url} alt="game cover" />;

const GameDescription = ({ game, name }) => (
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
        <h1>{name}</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <S.RowNoWrap>
            <Suspense maxDuration={500} fallback={<Placeholder />}>
              <GameCover game={game} />
            </Suspense>
            <GameDescription game={game} name={name} />
          </S.RowNoWrap>
        )}
      </S.GameHeader>
    );
  }
}
export default GameHeader;
