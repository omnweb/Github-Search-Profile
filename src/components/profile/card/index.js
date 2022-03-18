import React from "react";
import * as S from "./style";

const Card = ( {title, value} ) => {

  return (
    <S.Card>
      <S.CardTitle> { title } </S.CardTitle>
      <S.CardValue>{ value } </S.CardValue>
    </S.Card>
  );
};

export default Card;
