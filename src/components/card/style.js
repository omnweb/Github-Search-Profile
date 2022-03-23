import styled from "styled-components";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends";

// Card
export const Card = styled.div`
  display: colum;
  justify-content: center;
  align-items: center;
  // pading: 5%;
`;
export const CardTitle = styled.h5`
    font-size: 12px;
    margin: 0 0 20% 0;
  }
`;
export const CardValue = styled.span`
  font-weight: bold;
`;

export const Code = styled(FaCode)`
  font-size: 25px;
  color: #ffd700;
`;
export const Follower = styled(FaUsers)`
  font-size: 25px;
  color: #ffa500;
`;
export const Following = styled(FaUserFriends)`
  font-size: 25px;
  color: #dc143c;
`;
