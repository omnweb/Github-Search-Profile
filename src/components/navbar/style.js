import styled from 'styled-components'
// import {Github} from '@styled-icons/boxicons-logos/Github'


// Container
export const Navbar = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: self-start;
  align-items: center;
  height: 50px;
  position: fixed;
  width: 100%;
`
export const Left = styled.div`
  background-color: #000000;  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;

  @media (max-width: 1250px) {
    min-width: 45%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`
export const Right = styled.div`
  background-color: orange;
  display: flex;
  justify-content: self-start;
  align-items: center;
  min-height: 55px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`

// export const Git = styled(Github)`
//   color: #dfdfdf;
//   height: 40px;
//   align-self: center;
// `


