import React from "react";
import * as S from "./style";
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";

const Navbar = ({ children }) => {
  return (
    <S.Navbar>
      <S.Left>
        <FaGithubAlt size={40} color="#d3d3d3" />
        {children}
      </S.Left>
    </S.Navbar>
  );
};

export default Navbar;
