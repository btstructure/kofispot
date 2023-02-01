import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiCoffeeTogo } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/api/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }

  function handleAbout() {
    navigate("/About");
  }

  function handleHome() {
    navigate("/Home");
  }

  function handleMyProfile() {
    navigate("/MyProfile");
  }

  return (
    <Navbar className="navbar d-flex justify-content-center">
      <Container>
        <Navbar.Brand className="px-3 text-white fs-5">
          KofiSpot <BiCoffeeTogo  />
        </Navbar.Brand>
        <Navbar.Text className="d-flex justify-content-center text-white fs-5">
          Welcome {user.username}!
        </Navbar.Text>
        <Navbar.Collapse className="navbar-content justify-content-end align-items-start flex-row">
          <Nav.Link className="px-3 text-white  fs-5" onClick={handleHome}>
            Home
          </Nav.Link>
          <Nav.Link className="px-3 text-white fs-5" onClick={handleAbout}>
            About
          </Nav.Link>
          <Nav.Link className="px-3 text-white fs-5" onClick={handleMyProfile}>
            My Profile
          </Nav.Link>
          <Nav.Link className="px-3 text-white fs-5" onClick={handleLogout}>
            Logout
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
