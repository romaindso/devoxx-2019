import React from "react";
import * as S from "./styles";

const Loader = ({ type, height = "100%" }) => (
  <S.Center>
    <img src={type} height={height} />
  </S.Center>
);

export default Loader;
