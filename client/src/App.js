import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>KofiSpot</h1>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login onLogin={setUser} />} />
        <Route path="/SignUp" element={<SignUp onSignUp={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
