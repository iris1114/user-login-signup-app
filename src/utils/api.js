import axios from "axios";

export const getUsers = async () => {
  const usersData = await axios.get(
    "https://weblab-react-special-midtern.herokuapp.com/v1/users/"
  );

  return usersData.data.result;
};

export const getUser = async (userId) => {
  const userData = await axios.get(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId}`
  );

  return userData.data.result;
};

export const getSignUp = async (signUpData) => {
  const signUpRes = await axios.post("https://api.weblab.tw/v1/auth/register", {
    appId: "weblab",
    email: signUpData.email,
    username: signUpData.username,
    password: signUpData.password
  });

  return signUpRes;
};

export const getLogin = async (LoginData) => {
  const LoginRes = await axios.post(
    "https://api.weblab.tw/v1/auth/general-login",
    {
      appId: "weblab",
      account: LoginData.account,
      password: LoginData.password
    }
  );

  return LoginRes;
};

export const getUpdateUser = async (user, userId, authToken) => {
  const updateUserRes = await axios.post(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId.userId}`,
    {
      username: user.username,
      description: user.description || null,
      pictureUrl: user.picture_url || null
    },
    {
      headers: {
        Authorization: "Bearer " + authToken
      }
    }
  );

  return updateUserRes;
};

export const getDeleteUser = async (userId, authToken) => {
  const deleteUserRes = await axios.delete(
    `https://weblab-react-special-midtern.herokuapp.com/v1/users/${userId.userId}`,
    {
      headers: {
        Authorization: "Bearer " + authToken
      }
    }
  );

  return deleteUserRes;
};
