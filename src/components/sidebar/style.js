import styled from "styled-components";

// Sidebar
export const Sidebar = styled.aside`
  padding: 5%;
  background-color: #121212;
  height: 325px;
  margin: 90px 5% 10% 20%;
  border-radius: 5px;

  @media (max-width: 1250px) {
    margin-bottom: 10%;
    height: 420px;
  }

  @media (max-width: 960px) {
    margin-bottom: 10%;
    height: 440px;
  }

  @media (max-width: 600px) {
    margin: 70px 5% 0px 5%;
    height: auto;
  }
`;
