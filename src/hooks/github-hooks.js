import { GithubContext } from "../providers/github-provider";
import { useContext } from "react";

const useGithub = () => {
  const { githubState, getUser, getUserRepositories, getUserStarred } =
    useContext(GithubContext);

  return { githubState, getUser, getUserRepositories, getUserStarred };
};

export default useGithub;
