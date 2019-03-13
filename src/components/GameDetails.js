import React, { Component } from "react";
import { fetchGame } from "../api/fetchGame";
import { GameHeader } from "./GameHeader/";

export class GameDetails extends Component {
  state = {
    game: null,
    isLoading: true
  };

  componentDidMount() {
    fetchGame(this.props.id).then(
      game => this.setState({ isLoading: false, game }),
      error => this.setState({ isLoading: false, error })
    );
  }

  render() {
    const { game, isLoading } = this.state;
    if (isLoading) {
      return "loading...";
    }
    return <GameHeader game={game} />;
  }
}
