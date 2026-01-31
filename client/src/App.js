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
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      {user ? null : (
        <h1 className="text-white justify-content-left p-3">
          KofiSpot <BiCoffeeTogo />
        </h1>
      )}
      {user ? <NavBar user={user} setUser={setUser} onSearchChange={setSearch} /> : null}
      <Routes>
        {user && (
          <Route
            path="/Home"
            element={<Home user={user} setUser={setUser}  search={search}  />}
           
          />
        )}
        <Route path="/" element={<Login onLogin={setUser} />} />
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
