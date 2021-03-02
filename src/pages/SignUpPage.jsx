import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserLoginSignUpTab from "../components/users/UserLoginSIgnUpTab";
import { getSignUp } from "../utils/api";

const SignUpPage = () => {
  const history = useHistory();
  const defaultData = {
    email: "",
    username: "",
    password: ""
  };
  const [signUpData, setSignUpData] = useState(defaultData);
  const [editable, setEditable] = useState(true);

  const handleSignUpEmail = (e) => {
    setSignUpData({
      ...signUpData,
      email: e.target.value
    });
  };

  const handleSignUpUserName = (e) => {
    setSignUpData({
      ...signUpData,
      username: e.target.value
    });
  };

  const handleSignUpPassword = (e) => {
    setSignUpData({
      ...signUpData,
      password: e.target.value
    });
  };

  const handleSignUp = () => {
    getSignUp(signUpData)
      .then((res) => {
        if (res.data.code === "SUCCESS") {
          history.push(`users/`); // 需取得userId
        } else {
          alert(`message: ${res.data.message}`);
          setSignUpData(defaultData);
        }
      })
      .catch((error) => {
        alert(error.data.message);
      });
  };

  useEffect(() => {
    if (signUpData.email && signUpData.username && signUpData.password) {
      setEditable(true);
    } else {
      setEditable(false);
    }
  }, [signUpData]);

  return (
    <StyledSignUpPage>
      <div className="container text-center">
        <UserLoginSignUpTab variant="signup-active" />

        <div className="inputs text-center pt-5">
          <input
            type="email"
            className="form-control w-50 mb-3 mx-auto"
            placeholder="電子信箱"
            onChange={handleSignUpEmail}
            value={signUpData.email}
          />
          <input
            type="text"
            className="form-control w-50 mb-3 mx-auto"
            placeholder="使用者名稱"
            onChange={handleSignUpUserName}
            value={signUpData.username}
          />
          <input
            type="text"
            className="form-control w-50 mb-5 mx-auto"
            placeholder="密碼"
            onChange={handleSignUpPassword}
            value={signUpData.password}
          />
        </div>
        <Button
          variant="info"
          className="w-50"
          onClick={handleSignUp}
          disabled={!editable}
        >
          加入
        </Button>
      </div>
    </StyledSignUpPage>
  );
};

const StyledSignUpPage = styled.section`
  padding: 50px 0px;
`;

export default SignUpPage;
