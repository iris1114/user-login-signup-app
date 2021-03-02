import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ isLogin, loginData, onLogout }) => {
  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Link to={"/"}>
        <Navbar.Brand>Home</Navbar.Brand>
      </Link>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {isLogin ? (
          <div>
            <Navbar.Text className="mr-3">
              Signed in as:
              <Link to={"/"}>{loginData.account}</Link>
            </Navbar.Text>

            <Button variant="outline-info" onClick={handleLogoutClick}>
              Logout
            </Button>
          </div>
        ) : (
          <Link to={"/login"}>
            <Button variant="outline-info">Login</Button>
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
