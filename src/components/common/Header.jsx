import React, { useContext } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/context";

const Header = () => {
  const { authData, setAuthData } = useContext(AuthContext);

  const handleLogoutClick = () => {
    setAuthData(null);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Link to={"/"}>
        <Navbar.Brand>Home</Navbar.Brand>
      </Link>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {authData ? (
          <div>
            <Navbar.Text className="mr-3">
              Signed in as:
              <Link to={`/users/${authData.memberId}`}>{authData.name}</Link>
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
