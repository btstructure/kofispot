import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((d) => {
        if (d.errors) {
          alert(d.errors[0]);
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
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center"  
      style = {{height: "90vh"}}
    >
      <div style={{padding: '10px', borderRadius: '20px', backgroundColor: 'rgba(20, 23, 25, 120)', border: '2px solid #ccc' }}>
        <div className="text-center">
          <h1 className="text-white">Login</h1>
        </div>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="rounded-pill form-control mt-2 border-dark"
          ></input>{" "}
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="rounded-pill form-control mt-2 border-dark"
          ></input>
        </div>
        <div className="text-center mt-3">
          <button className="mx-auto btn-outline-primary btn">Log In</button>
        </div>
        <div className="text-center mt-3">
          <p className="text-center text-white">Don't have an account?</p>
          <p className="text-center text-white" onClick={handleSignUp} type="submit">
            Sign up
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
