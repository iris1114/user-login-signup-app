import React from "react";
import styled from "styled-components";
import LoadingImg from "../../images/loading.svg";

const Loading = () => {
  return (
    <StyledLoding>
      <img className="loading-img " src={LoadingImg} alt="loading" />
    </StyledLoding>
  );
};

const StyledLoding = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;

  .loading-img {
    display: block;
    width: 65px;
    height: 65px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export default Loading;
