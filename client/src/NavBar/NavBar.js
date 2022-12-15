import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiCoffeeTogo } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
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
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand>
          KofiSpot <BiCoffeeTogo />
        </Navbar.Brand>
        <Navbar.Text className="welcome">Welcome {user.username}!</Navbar.Text>
        <Navbar.Collapse className="navbar-content">
          <Nav.Link onClick={handleHome}>Home</Nav.Link>
          <Nav.Link onClick={handleAbout}>About</Nav.Link>
          <Nav.Link onClick={handleMyProfile}>My Profile</Nav.Link>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
