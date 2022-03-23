import React from "react";
import * as S from "./style";

const Card = ( {title, value, icon} ) => {

  return (
    <S.Card>
      {icon === "Code" && <S.Code />}
      {icon === "Folower" && <S.Follower />}
      {icon === "Folowing" && <S.Following />}
      <S.CardTitle> { title } </S.CardTitle>
      <S.CardValue>{ value } </S.CardValue>
    </S.Card>
  );
};

export default Card;
