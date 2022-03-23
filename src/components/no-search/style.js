import styled from "styled-components";

// NoSearch
export const SWhrapper = styled.div`
  background: #292929;
  color: #ffffff;

  display: inline-block;
  text-align: center;
  margin: 100px 0 0 -35%;

  @media (max-width: 600px) {
    margin: 100px 0 0 0;
  }
`;
export const ImageDefault = styled.img`
  width: 20%;

  @media (max-width: 600px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 30%;
  }
`;
