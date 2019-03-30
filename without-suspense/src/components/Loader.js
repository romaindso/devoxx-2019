import React from "react";
import * as S from "./styles";
import loaderUrl from "../assets/others/icon-loader.svg";

const Loader = () => (
  <S.Loader>
    <img src={loaderUrl} alt="loader" />
  </S.Loader>
);

export default Loader;
