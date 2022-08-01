import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function CoffeeSpotCard({ coffeespot }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/IndividualCoffeeSpot/${coffeespot.id}/`);
  }

  return (
    <div>
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
