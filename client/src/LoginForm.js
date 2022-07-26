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

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        className="login-form"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      ></input>
      <input
        className="login-form"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;
