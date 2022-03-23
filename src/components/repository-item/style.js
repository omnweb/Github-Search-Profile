import styled from "styled-components";
import { FaFileCode } from "@react-icons/all-files/fa/FaFileCode";
import { FaFileSignature } from "@react-icons/all-files/fa/FaFileSignature";
import { FaGitAlt } from "@react-icons/all-files/fa/FaGitAlt";

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
  color: #dfdfdf;

`;
export const SP = styled.p`
  margin-top: -5px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 1px;
  color: #dfdfdf;
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

export const Code = styled(FaFileCode)`
  font-size: 18px;
  color: #dfdfdf;
  margin: 0 5px 0 0;
`;

export const CommentAlt = styled(FaFileSignature)`
  font-size: 18px;
  color: #dfdfdf;
  margin: 0 5px 0 2px;
`;

export const GitAlt = styled(FaGitAlt)`
  font-size: 18px;
  margin: 0 5px 0 0;
  color: #dfdfdf;
`;
