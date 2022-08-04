import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import About from "./About";
import IndividualCoffeeSpot from "./IndividualCoffeeSpot";
import NavBar from "./NavBar";

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
     {user ? null : <h1>KofiSpot</h1>}
     {user ? <NavBar user={user} setUser={setUser} /> : null}
      <Routes>
        {user && (
          <Route
            path="/Home"
            element={<Home user={user} setUser={setUser} />}
          />
        )}
        <Route path="/" element={<Login onLogin={setUser} />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/IndividualCoffeeSpot/:id"
          element={<IndividualCoffeeSpot user={user} />}
        />
        <Route path="/SignUp" element={<SignUp onSignUp={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
