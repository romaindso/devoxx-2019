import React from "react";
import { Title, Container, List, Item, GameTitle } from "./common/ui";
import games from "./api/games";

const Game = ({ game }) => {
  return (
    <Item>
      <GameTitle>{game.name}</GameTitle>
    </Item>
  );
};

const GameList = () => {
  return (
    <List>
      {games.map(game => (
        <Game key={game.id} game={game} />
      ))}
    </List>
  );
};

const App = () => {
  return (
    <Container>
      <Title>Your Games</Title>
      <GameList />
    </Container>
  );
};

export default App;
