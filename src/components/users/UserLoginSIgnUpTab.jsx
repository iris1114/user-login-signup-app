import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserLoginSignUpTab = ({ variant }) => {
  return (
    <StyledUserLoginSignUpTab>
      <div className={`d-flex justify-content-center ${variant}`}>
        <Link to="/login">
          <p className="login-text mr-4">會員登入</p>
        </Link>
        <Link to="/signup">
          <p className="signup-text">加入會員</p>
        </Link>
      </div>
    </StyledUserLoginSignUpTab>
  );
};

const StyledUserLoginSignUpTab = styled.div`
  .login-active {
    .login-text {
      color: #17a2b8;
      border-bottom: 1px solid #17a2b8;
    }
  }
  .signup-active {
    .signup-text {
      color: #17a2b8;
      border-bottom: 1px solid #17a2b8;
    }
  }
`;

export default UserLoginSignUpTab;
