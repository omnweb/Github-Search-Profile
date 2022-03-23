import React, { useState } from "react";
import * as S from "./style";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import useGithub from "../../hooks/github-hooks";

const Searcher = ({ children }) => {
  const { getUser } = useGithub();
  const [usernameSearch, setUsernameSearch] = useState();
  const submitGetUser = () => {
    if (!usernameSearch) return;

    return getUser(usernameSearch);
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      getUser(usernameSearch);
    }
  }

  return (
    <S.Searcher>
      <S.Input
        type="text"
        clearInput
        placeholder=" Search"
        onKeyPress={handleKeyPress}
        onChange={(event) => setUsernameSearch(event.target.value)}
      />
      <S.Button onClick={submitGetUser}>
        <FaSearch size={13} color="#121212" />
      </S.Button>
      {children}
    </S.Searcher>
  );
};

export default Searcher;
