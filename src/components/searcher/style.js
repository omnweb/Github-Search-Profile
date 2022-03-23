import styled from "styled-components";

// Search
export const Searcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: row;
  }
`;
export const Input = styled.input`
  height: 31px;
  background: #292929;
  border: none;
  outline: none;
  color: #dfdfdf;
  border-radius: 4px 0px 0px 4px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 35px;
  width: 35px;
  color: white;
  border: solid 1px #1e1e1e;
  border-radius: 0px 4px 4px 0px;
  color: #dfdfdf;


  display: flex;

  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 20%;
  }
`;
