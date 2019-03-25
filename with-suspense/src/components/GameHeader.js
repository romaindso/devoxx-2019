import React, { Component, Fragment, Suspense } from "react";
import { unstable_createResource } from "react-cache";
import { fetchGameDetails } from "../api/fetchGame";
import { Loader } from "../components/Loader";
import { Placeholder } from "../components/Placeholder";
import * as S from "./styles";

const GameResource = unstable_createResource(fetchGameDetails);

export class GameHeader extends Component {
  render() {
    const { name, gameId } = this.props;

    return (
      <S.GameHeader>
        <Suspense maxDuration={500} fallback={<Placeholder />}>
          <S.GameImage src={GameResource.read(gameId).image_url} />
        </Suspense>
        <S.Container>
          <h1>{name}</h1>
          <Suspense maxDuration={500} fallback={<Loader />}>
            <Fragment>
              <S.GamePlatformWrapper>
                {GameResource.read(gameId).platforms.map(platform => (
                  <S.GamePlatform key={platform}>{platform}</S.GamePlatform>
                ))}
              </S.GamePlatformWrapper>
              <p>{GameResource.read(gameId).description}</p>
            </Fragment>
          </Suspense>
        </S.Container>
      </S.GameHeader>
    );
  }
}
