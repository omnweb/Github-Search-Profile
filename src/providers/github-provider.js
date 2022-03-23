import React, { createContext, useCallback, useState } from "react";
import api from "../services/githubApi";

export const GithubContext = createContext({
  hasUser: false,
  user: {},
  repositories: [],
  starred: [],
  loading: false,
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    //setGithubState
    user: {
      id: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      location: undefined,
      followers: 0,
      followings: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
    loading: false,
  });

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepositories: useCallback(
      (username) => getUserRepositories(username),
      []
    ),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };
  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));
    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            login: data.login,
            name: data.name,
            img: data.avatar_url,
            html_url: data.html_url,
            blog: data.blog,
            location: data.location,
            followers: data.followers,
            followings: data.following,
            public_repos: data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };
  const getUserRepositories = (username) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };
  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
