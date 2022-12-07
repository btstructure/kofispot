import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import Home from "./HomePage/Home";
import About from "./MainPage/About";
import MyProfile from "./MainPage/MyProfile";
import IndividualCoffeeSpot from "./Comments/IndividualCoffeeSpot";
import NavBar from "./NavBar/NavBar";
import { BiCoffeeTogo } from "react-icons/bi";
import "./App.css"

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
      {user ? null : (
        <h1 className="text-white">
          KofiSpot <BiCoffeeTogo />
        </h1>
      )}
      {user ? <NavBar user={user} setUser={setUser} /> : null}
      <Routes>
        {user && (
          <Route
            path="/Home"
            element={<Home user={user} setUser={setUser} />}
          />
        )}
        <Route  path="/" element={<Login onLogin={setUser}   />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/MyProfile"
          element={<MyProfile user={user} setUser={setUser} />}
        />
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
