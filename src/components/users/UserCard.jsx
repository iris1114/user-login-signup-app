import React from "react";
import styled from "styled-components";
import UserImage from "./UserImage";
import defaultProfileImg from "../../images/defaultProfile.png";

const UserCard = ({ username, picture }) => {
  return (
    <StyledUserCard>
      <div className="mb-5">
        {picture === null ? (
          <UserImage picture={defaultProfileImg} />
        ) : (
          <UserImage picture={picture} />
        )}
      </div>

      <div>
        <p className="text-center">{username}</p>
      </div>
    </StyledUserCard>
  );
};

const StyledUserCard = styled.div`
  text-align: center;
  margin-right: 20px;
  background-color: #ccc;
  border-radius: 5px;
  padding: 20px;

  &:hover {
    background-color: #343a40;
    color: #fff;
  }
`;

export default UserCard;
