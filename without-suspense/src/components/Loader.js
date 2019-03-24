import React from "react";
import * as S from "./styles";
import loaderUrl from "../assets/others/puff.svg";

export const Loader = () => (
  <S.Loader>
    <img src={loaderUrl} />
  </S.Loader>
);
