import React, { Component, Fragment } from "react";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { DevTools, DevToolsContext } from "./components/DevTools";

class App extends Component {
  state = {
    delay: 0
  };

  setUpDelay = e => {
    this.setState({
      delay: parseFloat(e.target.value) * 1000
    });
  };

  render() {
    const { delay } = this.state;

    return (
      <DevToolsContext.Provider value={delay}>
        <Router>
          <Home path="/" />
          <Game path="/games/:id" />
        </Router>
        <DevTools setUpDelay={this.setUpDelay} delay={delay} />
      </DevToolsContext.Provider>
    );
  }
}

export default App;
