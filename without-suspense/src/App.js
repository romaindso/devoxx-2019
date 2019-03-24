import React, { Component } from "react";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { DevTools, DevToolsContext } from "./components/DevTools";

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
          <Game path="/games/:id/:name" />
        </Router>
        <DevTools setUpDelay={this.setUpDelay} delay={delay} />
      </DevToolsContext.Provider>
    );
  }
}

export default App;
