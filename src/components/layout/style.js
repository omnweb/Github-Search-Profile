import styled from "styled-components";

// Layout
export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1%;
  background: #292929;
  min-height: 100vh;
  color: #ffffff;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
