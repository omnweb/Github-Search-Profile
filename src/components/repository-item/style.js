import styled from "styled-components";

// Repository Item
export const WrapperItem = styled.div`
  background: #1e1e1e;
  height: 100px;
  border-radius: 5px;
  padding: 2%;
  margin-bottom: 1%;
`;
export const SH3 = styled.h3`
  font-size: 16px;
  letter-spacing: 1px;
`;
export const SP = styled.p`
  margin-top: -5px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 1px;
  // text-align: justify;
`;
export const SA = styled.a`
  text-decoration: none;
  color: #9932cc;

  &:hover {
    color: #663399;
  }

  @media (max-width: 600px) {
    line-height: 1;
    font-size: 13px;
  }
`;
