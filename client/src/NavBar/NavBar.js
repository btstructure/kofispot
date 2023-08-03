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
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <Container>
        <Navbar.Brand className="d-flex align-items-center text-white fs-4">
          <BiCoffeeTogo style={{ fontSize: "2rem", marginRight: "0.5rem" }} />
          KofiSpot
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarContent" />
        <Navbar.Collapse id="navbarContent" className="justify-content-end">
          <Nav>
            <Nav.Link
              className="px-3 text-white fs-5 fw-bold"
              onClick={handleHome}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="px-3 text-white fs-5 fw-bold"
              onClick={handleAbout}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="px-3 text-white fs-5 fw-bold"
              onClick={handleMyProfile}
            >
              My Profile
            </Nav.Link>
            <Nav.Link
              className="px-3 text-white fs-5 fw-bold"
              onClick={handleLogout}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
