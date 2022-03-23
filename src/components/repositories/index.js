import React, { useEffect, useState } from "react";
import * as S from "./style";
import RepositoryItem from "../repository-item/";
import useGithub from "../../hooks/github-hooks";


const Repositories = () => {
  const { githubState, getUserRepositories, getUserStarred } = useGithub();
  const [userSearchRepositories, setuserSearchRepositories] = useState(false);

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserRepositories(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setuserSearchRepositories(!!githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {userSearchRepositories ? (
        <S.STabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.STabList>
            <S.STab> Repositories</S.STab>
            <S.STab> Starred</S.STab>
          </S.STabList>
          <S.STabPanel>
            {githubState.repositories.map((repo) => (
              <S.Wrapper>
                <RepositoryItem
                  key={repo.id}
                  name={repo.name}
                  fullName={repo.full_name}
                  description={repo.description}
                  linkTo={repo.html_url}
                />
              </S.Wrapper>
            ))}
          </S.STabPanel>
          <S.STabPanel>
            {githubState.starred.map((repo) => (
              <S.Wrapper>
                <RepositoryItem
                  key={repo.id}
                  name={repo.name}
                  fullName={repo.full_name}
                  description={repo.description ? repo.description : 'No description to this project'}
                  linkTo={repo.html_url}
                />
              </S.Wrapper>
            ))}
          </S.STabPanel>
        </S.STabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
