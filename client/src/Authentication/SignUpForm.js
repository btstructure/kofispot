import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUpForm({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    

    if (password !== passwordConfirmation) {
      setErrors(["Passwords do not match"]);
      return;
    }

    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((response) => response.json())
      .then((d) => {
        if (d.errors) {
          setErrors(d.errors);
        } else {
          setErrors([]);
          onSignUp(true);
          navigate("/Login")
        }
      });
  }

  function handleLogin() {
    navigate("/");
  }

  return (
    <div
      style={{ height: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="text-white d-flex justify-content-center align-items-center fs-3">
            Sign Up
          </Form.Label>
          <div>
            {errors.length > 0 && (
              <div className="text-danger">
                {errors.map((err, i) => (
                  <p key={i}>{err}</p>
                ))}
              </div>
            )}
          </div>
          <div className="py-2">
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            ></Form.Control>
          </div>
          <div className="py-2">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></Form.Control>
          </div>
          <div className="py-2">
            <Form.Control
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="Confirm Password"
            ></Form.Control>
          </div>

          <div className="p-3 justify-content-center align-items-center d-flex">
            <Button type="submit">Submit</Button>
          </div>
          <div>
            <p
              className="d-flex justify-content-center align-item-center text-white"
              onClick={handleLogin}
              type="submit"
            >
              Return to Login
            </p>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignUpForm;
