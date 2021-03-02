import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import UserPage from "./pages/UserPage";
import UserListPage from "./pages/UserListPage";

const UsersApp = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${path}`} exact>
          <UserListPage />
        </Route>
        <Route path={`${path}/:userId`} exact>
          <UserPage />
        </Route>
      </Switch>
    </>
  );
};

export default UsersApp;
