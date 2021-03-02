import React from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/users/UserCard";
import styled from "styled-components";
import useUserList from "../hooks/users/useUserList";
import Loading from "../components/common/Loading";
import ErrorPage from "./ErrorPage";

const UserListPage = () => {
  const { users, loading, error } = useUserList();
  return (
    <StyledUserListPage>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className="container">
          <h2 className="f-lg-4xl text-center mb-5">Users List</h2>
          <div className="d-flex flex-wrap">
            {users &&
              Object.keys(users).map((userId, index) => {
                return (
                  <div className="col-lg-3 col-md-6  mb-5" key={index}>
                    <Link to={`/users/${users[userId].id}`}>
                      <UserCard
                        username={users[userId].username}
                        picture={users[userId].picture_url}
                      ></UserCard>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </StyledUserListPage>
  );
};

const StyledUserListPage = styled.section`
  padding: 50px 0px;
`;

export default UserListPage;
