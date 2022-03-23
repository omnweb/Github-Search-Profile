import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./style";

import NoSearch from "../no-search";

const Layout = ({ children }) => {
  const { githubState } = useGithub();
  return (
    <S.Wrapper>
      {githubState.hasUser ? (
        githubState.loading ? (
          <h1>Loading...</h1>
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
