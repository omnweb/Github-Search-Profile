import styled from "styled-components";

// Profile
export const profileContainer = styled.div`
  display: flex;
  flex-direction: column;
  //  background: #1e1e1e;
  border-radius: 5px;
`;
export const Image = styled.img`
  margin: 5%;
  width: 30%;
  border-radius: 50%;
  align-self: center;
  z-index: 1;
  box-shadow: 2px 2px 20px #000000;

  @media (max-width: 1250px) {
    margin-bottom: 10%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const StatusBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background: #1e1e1e;
  padding: 5% 0;
  border-radius: 5px;
  margin-top: 5%;
`;
export const ProfileTitle = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    margin-top: 5%;
    font-size: 16px;
    text-align: center;
    letter-spacing: 1px;
  }
`;
export const User = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1e1e1e;
    border-radius: 5px;
    padding: 15%;
    margin-top: -35px;
    @media (max-width: 600px) {
      margin-top: -60px;
    }
  }
`;
export const A = styled.a`
    letter-spacing: 1px;
    margin-top: 5%;
    text-decoration: none;
    color: #9932CC;

    &:hover {
      color: #663399 ;
    }
  }
`;

