import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((d) => {
        if (d.errors) {
          setError("Incorrect username or password");
          setPassword("");
        } else {
          onLogin(d);
          navigate("/Home");
        }
      });
  }

  function handleSignUp() {
    navigate("/SignUp");
  }

  return (
    <div
      style={{ height: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="text-white d-flex justify-content-center align-items-center fs-3">
            Login
          </Form.Label>
          {error && (
            <p className="text-danger text-center">{error}</p> 
          )}
          <div className="p-2">
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            ></Form.Control>
          </div>

          <div className="p-2">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></Form.Control>
          </div>
          <div className="p-3 justify-content-center align-items-center d-flex">
            <Button type="submit">Sign In</Button>
          </div>
          <div className="text-white">
            <p className="d-flex justify-content-center align-item-center">
              Don't have an account?
            </p>
            <p
              className="d-flex justify-content-center align-item-center"
              onClick={handleSignUp}
              type="submit"
              upperCase={false}
            >
              Sign up
            </p>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default LoginForm;
