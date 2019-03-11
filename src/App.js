import React from "react";
import { Router } from "@reach/router";
import { Home } from "./Home";
import { Game } from "./Game";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Game path="/games/:id" />
    </Router>
  );
};

export default App;
