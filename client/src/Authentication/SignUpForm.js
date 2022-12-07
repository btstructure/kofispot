import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
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
          alert(d.errors[0]);
        } else {
          onSignUp(true);
          navigate("/Home");
        }
      });
  }

  function handleLogin() {
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div style={{padding: '10px', borderRadius: '20px', backgroundColor: 'rgba(20, 23, 25, 120)', border: '2px solid #ccc'}}>
        <div className="text-center">
          <h1 className="text-white">SignUp</h1>
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="rounded-pill form-control mt-2 border-dark"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="rounded-pill form-control mt-2 border-dark"
        ></input>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="confirm password"
          className="rounded-pill form-control mt-2 border-dark"
        ></input>
        <div className="text-center mt-3"> 
          <button className="mx-auto btn-outline-primary btn">Submit</button>
        </div>
        <div className="text-center mt-3">
          <p className="text-center text-white hover text-decoration-underline" onClick={handleLogin} type="submit">
            Return to Login
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
