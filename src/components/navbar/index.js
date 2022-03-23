import React from "react";
import * as S from "./style";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const Navbar = ({ children }) => {
  return (
    <S.Navbar>
      <S.Left>
        <FaGithub size={30} color="#d3d3d3" />
        {children}
      </S.Left>
    </S.Navbar>
  );
};

export default Navbar;
