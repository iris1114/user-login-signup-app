import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserLoginSignUpTab from "../components/users/UserLoginSIgnUpTab";
import { getLogin } from "../utils/api";
import jwt from "jwt-decode";

const LoginPage = ({ onLoggedIn }) => {
  const history = useHistory();

  const defaultData = {
    account: "",
    password: ""
  };

  const [loginData, setLoginData] = useState(defaultData);
  const [isLogin, setIsLogin] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [editable, setEditable] = useState(true);

  const handleAccountChange = (e) => {
    setLoginData({
      ...loginData,
      account: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value
    });
  };

  const handleLoginClick = () => {
    getLogin(loginData)
      .then((res) => {
        alert(`message: ${res.data.message}`);
        console.log("token",jwt(res.data.result.authToken));

        setAuthToken(res.data.result.authToken);
        if (res.data.code === "SUCCESS") {
          setIsLogin(true);
          history.push(`/users`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onLoggedIn(isLogin, loginData, authToken);
  }, [onLoggedIn, loginData, isLogin, authToken]);

  useEffect(() => {
    if (loginData.account && loginData.password) {
      setEditable(true);
    } else {
      setEditable(false);
    }
  }, [loginData]);

  return (
    <StyledLoginPage>
      {isLogin && <div>已登入</div>}
      {!isLogin && (
        <div className="container text-center">
          <UserLoginSignUpTab variant="login-active" />

          <div className="inputs text-center pt-5">
            <input
              type="text"
              className="form-control w-50 mb-3 mx-auto"
              placeholder="使用者名稱"
              onChange={handleAccountChange}
              value={loginData.account}
            />
            <input
              type="text"
              className="form-control w-50 mb-5 mx-auto"
              placeholder="密碼"
              onChange={handlePasswordChange}
              value={loginData.password}
            />
          </div>
          <Button
            variant="info"
            className="w-50"
            onClick={handleLoginClick}
            disabled={!editable}
          >
            登入
          </Button>
        </div>
      )}
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.section`
  padding: 50px 0px;
`;

export default LoginPage;
