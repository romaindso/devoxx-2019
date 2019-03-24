import React, { Component } from "react";
import { Router } from "@reach/router";
import { DevTools, DevToolsContext } from "./components/DevTools";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";

class App extends Component {
  state = {
    delay: localStorage.getItem("delay") || 0
  };

  setUpDelay = e => {
    const delay = parseFloat(e.target.value) * 1000;
    localStorage.setItem("delay", delay);
    this.setState({ delay });
  };

  render() {
    const { delay } = this.state;

    return (
      <DevToolsContext.Provider value={delay}>
        <Router>
          <Home path="/" />
          <GameDetails path="/games/:id/:name" />
        </Router>
        <DevTools setUpDelay={this.setUpDelay} delay={delay} />
      </DevToolsContext.Provider>
    );
  }
}

export default App;
