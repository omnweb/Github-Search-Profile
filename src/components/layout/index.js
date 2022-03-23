import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./style";
import imgLoading from "../../assets/loading.gif";

import NoSearch from "../no-search";

const Layout = ({ children }) => {
  const { githubState } = useGithub();
  return (
    <S.Wrapper>
      {githubState.hasUser ? (
        githubState.loading ? (
          <S.Loading src={imgLoading} alt="loading"/>
        ) : (
          <>{children}</>
        )
      ) : (
        <NoSearch />
      )}
    </S.Wrapper>
  );
};

export default Layout;
