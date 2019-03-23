import React from "react";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Game path="/games/:id" />
    </Router>
  );
};

export default App;
