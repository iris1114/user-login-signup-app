import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import UsersApp from "./UsersApp";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { AuthProvider } from "./utils/context";

const App = () => {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/users">
                <UsersApp />
                </Route>
                <Route path="/login">
                <LoginPage />
                </Route>
                <Route path="/signup">
                <SignUpPage />
                </Route>
                <Route path="/">
                <Redirect to="/users" />
                </Route>
            </Switch>
        </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

