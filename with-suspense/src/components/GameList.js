import React, { Component, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { Link } from "@reach/router";
import { fetchGameList } from "../api/fetchGame";
import { Loader } from "./Loader";
import * as S from "./styles";

const GameItem = ({ game }) => (
  <S.Item>
    <S.GameCover src={game.image_url} />
    <S.GameTitle>{game.name}</S.GameTitle>
  </S.Item>
);

const gamesResource = unstable_createResource(fetchGameList);

export class GameList extends Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <S.List>
          {gamesResource.read().map(game => (
            <Link to={`/games/${game.id}/${game.name}`} key={game.id}>
              <GameItem game={game} />
            </Link>
          ))}
        </S.List>
      </Suspense>
    );
  }
}
