import React from "react";
import IndividualCoffeeSpot from "./IndividualCoffeeSpot";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

function CoffeeSpotCard({ coffeespot }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/IndividualCoffeeSpot/${coffeespot.id}`);
  }
  return (
    <div>
      {/* <Routes>
        <Route
          path={`/CoffeeSpot/${coffeespot.id}`}
          element={<IndividualCoffeeSpot coffeespot={coffeespot} />}
        />
      </Routes> */}
      <div
        onClick={handleNavigate}
        className="coffee-card"
        coffeespot={coffeespot}
      >
        <p>{coffeespot.name}</p>
        <img src={coffeespot.image_url} className="image-card" />
        <p>{coffeespot.average_rating}/5</p>
        <p>{coffeespot.location}</p>
      </div>
    </div>
  );
}

export default CoffeeSpotCard;
