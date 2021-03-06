import React, { Component, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import DevTools, { DevToolsContext } from "./components/DevTools";
import Loader from "./components/Loader";
const Home = lazy(() => import("./pages/Home"));
const GameDetails = lazy(() => import("./pages/GameDetails"));

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
      <Suspense fallback={<Loader />}>
        <DevToolsContext.Provider value={delay}>
          <Router>
            <Home path="/" />
            <GameDetails path="/games/:id/:name" />
          </Router>
          <DevTools setUpDelay={this.setUpDelay} delay={delay} />
        </DevToolsContext.Provider>
      </Suspense>
    );
  }
}

export default App;
