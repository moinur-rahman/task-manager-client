import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useHistory } from "react-router";

import taskManagerApi from "../../apis/taskManagerApi";

import "../../css/Header.css";

const Header = () => {
  const history = useHistory();

  const onLogoutClick = async () => {
    try {
      await taskManagerApi().post("/users/logout");

      localStorage.removeItem("user-info");
      localStorage.removeItem("token");
    } catch (error) {}
    history.push("/");
  };
  var getUser = localStorage.getItem("user-info");

  getUser = JSON.parse(getUser);

  return (
    <div className="navigation-bar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
          <Nav>
            <Nav.Link>{getUser && getUser.user.name}</Nav.Link>
            <Nav.Link onClick={onLogoutClick}>{getUser && "Logout"}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
