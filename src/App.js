import React from "react";
import { Title } from "./common/ui";
import games from "./api/games";

const App = () => {
  return (
    <div>
      <Title>Your Games</Title>
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
