import React from "react";
import styled from "styled-components";

const UserImage = ({ picture }) => {
  return (
    <StyledUserImage>
      <img className="picture" src={picture} alt="img" />
    </StyledUserImage>
  );
};

const StyledUserImage = styled.div`
  width: 120px;
  height: 120px;

  margin: auto;
  .picture {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export default UserImage;
