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
    fetchGameCharacters(this.props.gameId, delay).then(characters =>
      this.setState({ isLoading: false, characters })
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
          <S.Row>
            {characters.map((character, index) => (
              <S.CharacterImage src={character} key={index} alt="characters" />
            ))}
          </S.Row>
        )}
      </S.GameCharacters>
    );
  }
}

export default GameCharacters;
