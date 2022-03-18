import styled from 'styled-components'


// Container
export const Wrapper = styled.main`
  display: grid;
  grid-template-columns:  1fr 3fr;
  grid-gap: 1%;
  background: #292929;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
