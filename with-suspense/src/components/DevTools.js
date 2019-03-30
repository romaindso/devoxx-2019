import React, { Component } from "react";
import * as S from "./styles";

export const DevToolsContext = React.createContext();

class DevTools extends Component {
  render() {
    const { delay, setUpDelay } = this.props;

    return (
      <S.DevTools>
        Delay: {delay ? delay / 1000 : 0} s
        <input
          type="range"
          min="0"
          max="3"
          step="0.5"
          value={delay ? delay / 1000 : 0}
          onChange={setUpDelay}
        />
      </S.DevTools>
    );
  }
}
export default DevTools;
