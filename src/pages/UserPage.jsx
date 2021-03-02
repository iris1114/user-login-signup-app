import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import Loading from "../components/common/Loading";
import UserImage from "../components/users/UserImage";
import useUser from "../hooks/users/useUser";
import defaultProfileImg from "../images/defaultProfile.png";
import { getDeleteUser, getUpdateUser } from "../utils/api";
import ErrorPage from "./ErrorPage";

const UserPage = ({ isLogin, authToken, onUpdateAuthToken }) => {
  const userId = useParams();
  const history = useHistory();
  const { initUser, loading, error } = useUser(userId);
  const [editable, setEditable] = useState(false);
  const [user, setUser] = useState(initUser);
  const [newToken, setNewToken] = useState(authToken);

  useEffect(() => {
    setUser(initUser);
  }, [initUser]);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleDeleteClick = () => {
    alert("Are you sure you want to delete it?");
    getDeleteUser(userId, authToken)
      .then((res) => {
        if (res.data.code !== "SUCCESS") {
          alert("刪除失敗， 你無權限刪除。");
        } else {
          setNewToken("");
          onUpdateAuthToken(newToken);
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  const handleNameChange = (e) => {
    setUser({
      ...user,
      username: e.target.value
    });
  };

  const handlePictureChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      setUser({
        ...user,
        picture_url: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDescChange = (e) => {
    setUser({
      ...user,
      description: e.target.value
    });
  };

  const handleCancelClick = () => {
    setUser(initUser);
    setEditable(false);
  };

  const handleSaveClick = () => {
    getUpdateUser(user, userId, authToken)
      .then((res) => {
        if (res.data.code !== "SUCCESS") {
          alert("需登入後才能編輯，編輯失敗，你無權編輯，請取消。");
        } else {
          setEditable(false);
          alert(res.data.message);
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <StyledUserPage>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className="container">
          {!editable && (
            <div className="wrap">
              <div className="mb-4">
                {user && user.picture_url ? (
                  <UserImage picture={user && user.picture_url} />
                ) : (
                  <UserImage picture={defaultProfileImg} />
                )}
              </div>

              <h2 className="f-lg-2xl mb-5">{user && user.username}</h2>
              {user && user.description ? (
                <p className="mb-5">{user && user.description}</p>
              ) : (
                <p className="mb-5">no description</p>
              )}
              <div className="d-flex justify-content-center mb-5">
                <Button
                  variant="outline-info"
                  className="btn mr-4"
                  onClick={handleEditClick}
                >
                  編輯
                </Button>
                <Button variant="outline-danger" onClick={handleDeleteClick}>
                  刪除
                </Button>
              </div>
            </div>
          )}

          {editable && (
            <div className="editable-wrap">
              <div className="mb-4">
                {user.picture_url ? (
                  <UserImage picture={user.picture_url} />
                ) : (
                  <UserImage picture="https://i.imgur.com/YmkkmcY.png" />
                )}
              </div>
              <div className="mb-5">
                <input
                  type="file"
                  className="mb-2"
                  onChange={handlePictureChange}
                />
                <p>上限300kb</p>
              </div>
              <input
                type="text"
                className="form-control w-50 mb-3 mx-auto"
                placeholder="使用者名稱"
                onChange={handleNameChange}
                value={user.username}
              />
              <textarea
                className="form-control w-50 mb-5 mx-auto"
                rows="5"
                placeholder="描述"
                onChange={handleDescChange}
                value={user.description ? user.description : ""}
              ></textarea>
              <div className="d-flex justify-content-center mb-5">
                <Button
                  variant="outline-info"
                  className="btn mr-4"
                  onClick={handleCancelClick}
                >
                  取消
                </Button>
                <Button variant="info" onClick={handleSaveClick}>
                  儲存
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </StyledUserPage>
  );
};

const StyledUserPage = styled.section`
  text-align: center;
  padding: 50px 0px;
`;

export default UserPage;

//URL.createObjectURL(file) - why cant use
