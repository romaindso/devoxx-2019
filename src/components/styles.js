import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CenterH = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CenterV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GameHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 256px;
  }
`;

export const GamePlatformWrapper = styled(CenterH)`
  justify-content: flex-start;
`;

export const GamePlatform = styled.div`
  display: inline-block;
  padding: 0.25em 0.5em;
  color: white;
  border: 1px solid white;
  border-radius: 0.28em;
  background: rgba(34, 34, 34, 0.4);
  font-size: 16px;
  font-weight: bold;
  line-height: 1.14em;
  text-transform: uppercase;
`;
