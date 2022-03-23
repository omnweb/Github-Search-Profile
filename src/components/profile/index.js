import React from "react";
import * as S from "./style";
import defaultImg from "../../assets/default-profile-image.jpg";
import useGithub from "../../hooks/github-hooks";

// component
import Card from "../card/index.js";

const Profile = () => {
  const { githubState } = useGithub();
  return (
    <S.profileContainer>
      <S.Image
        src={githubState.user.img ? githubState.user.img : defaultImg}
        alt="Avatar"
      />
      <S.User>
        <S.ProfileTitle>{githubState.user.name}</S.ProfileTitle>
        <S.A href={githubState.user.html_url} target="_blank" rel="noreferrer">
          {githubState.user.login}
        </S.A>
      </S.User>
      <S.StatusBar>
        <Card
          title="Followers"
          value={githubState.user.followers}
          icon="Folowing"
        />
        <Card
          title="Followings"
          value={githubState.user.followings}
          icon="Folower"
        />
        <Card
          title="Repositories"
          value={githubState.user.public_repos}
          icon="Code"
        />
      </S.StatusBar>
    </S.profileContainer>
  );
};

export default Profile;
