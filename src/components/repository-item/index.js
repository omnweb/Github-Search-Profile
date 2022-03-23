import React from 'react';
import * as S from './style';

const RepositoryItem = ({name, fullName, description, linkTo}) => {
  return (
    <>
      <S.WrapperItem >
        <S.SH3>{name}</S.SH3>
        <S.SP>{description}</S.SP>
        <S.SA href={linkTo} target="_blank" rel="noreferrer">{fullName}</S.SA>
      </S.WrapperItem>
    </>
  )
}

export default RepositoryItem;
