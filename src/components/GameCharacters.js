import React, { Component, Fragment } from "react";
import { fetchGameCharacters } from "../api/fetchGame";
import * as S from "./styles";

export class GameCharacters extends Component {
  state = {
    characters: null,
    isLoading: true
  };

  componentDidMount() {
    fetchGameCharacters(this.props.gameId).then(
      characters => this.setState({ isLoading: false, characters }),
      error => this.setState({ isLoading: false, error })
    );
  }

  render() {
    const { characters, isLoading } = this.state;

    return (
      <S.GameCharacters>
        <h2>Characters</h2>

        {isLoading ? (
          "loading..."
        ) : (
          <S.GameCharactersWrapper>
            {characters.map((character, index) => (
              <img src={character} key={index} />
            ))}
          </S.GameCharactersWrapper>
        )}
      </S.GameCharacters>
    );
  }
}
