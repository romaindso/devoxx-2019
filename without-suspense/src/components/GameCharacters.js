import React, { Component } from "react";
import { fetchGameCharacters } from "../api/fetchGame";
import { DevToolsContext } from "../components/DevTools";
import Loader from "../components/Loader";
import * as S from "./styles";

class GameCharacters extends Component {
  state = {
    characters: null,
    isLoading: true
  };

  static contextType = DevToolsContext;

  componentDidMount() {
    let delay = this.context;
    fetchGameCharacters(this.props.gameId, delay).then(
      characters => this.setState({ isLoading: false, characters }),
      error => this.setState({ isLoading: false, error })
    );
  }

  render() {
    const { characters, isLoading } = this.state;
    const { gameId } = this.props;

    return (
      <S.GameCharacters>
        <h2>Characters</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <S.GameCharactersWrapper>
            {characters.map((character, index) => (
              <img src={character} key={index} alt="characters" />
            ))}
          </S.GameCharactersWrapper>
        )}
      </S.GameCharacters>
    );
  }
}

export default GameCharacters;
