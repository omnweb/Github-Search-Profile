import React from "react";
import * as S from "./style";
import defaultImage from "../../assets/default-profile-image.png"

function NoSearch() {
  return (
    <>
      <div />
      <S.SWhrapper>
        <h2>Serarch a github profile...</h2>
        <S.ImageDefault src={defaultImage} alt="default user"/> 
      </S.SWhrapper>
    </>
  );
}

export default NoSearch;
