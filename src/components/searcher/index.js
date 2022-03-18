import React from 'react'
import * as S from './style'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const Searcher = ({children}) => {
  return (
    <S.Searcher > 
        <S.Input 
          type="text" 
          clearInput 
          placeholder=" Pesquisar" />   
        <S.Button ><FaSearch  size={13} color="#d3d3d3"/></S.Button>   
        {/* <S.Find  title='pesquisar'/> */}
        {children}
    </S.Searcher>
  )
}

export default  Searcher;
