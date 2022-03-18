import React from "react";
import * as S from "./style";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends";



// omponent
import Card from "./card/index.js";

const Profile = () => {
  return (
    <S.profileContainer>
      <S.Image
        src="https://avatars.githubusercontent.com/u/66975270?v=4"
        alt="Avatar"
      />
      <S.User>
        <S.ProfileTitle>Ovidio Matiazi Neto</S.ProfileTitle>
        <S.Span> Omnweb</S.Span>
      </S.User>
        <S.Incons>
          <FaUsers size={25} color="#d3d3d3" /> 
          <FaStar size={25} color="#d3d3d3" /> 
          <FaUserFriends size={25} color="#d3d3d3"/> 
        </S.Incons>
      <S.StatusBar>
        <Card title="Folowers" value="4" icon="FaBeer"/>
        <Card title="Starreds" value="4" />
        <Card title="Followings" value="4" />
      </S.StatusBar>
    </S.profileContainer>
  );
};

export default Profile;
