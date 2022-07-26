import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import MainPage from "./MainPage";
import IndividualCoffeeSpot from "./IndividualCoffeeSpot";

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
      <MainPage />

      <Routes>
        <Route path="/Home" element={<Home user={user} setUser={setUser} />} />
        <Route path="/" element={<Login onLogin={setUser} />} />
        <Route
          path="/IndividualCoffeeSpot/:id"
          element={<IndividualCoffeeSpot />}
        />
        <Route path="/SignUp" element={<SignUp onSignUp={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
