import React from "react";
import { useNavigate } from "react-router-dom";

function CoffeeSpotCard({ coffeespot }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/IndividualCoffeeSpot/${coffeespot.id}/`);
  }

  return (
    <div className="text-center text-white hover-zoom">
      <div onClick={handleNavigate} coffeespot={coffeespot}>
        <p>{coffeespot.name}</p>
        <div className="">
          <img
            className="rounded-circle hover-shadow" 
            style={{ height: "250px", width: "250px" }}
            src={coffeespot.image_url}
            alt=""
          />
        </div>
        <p>{coffeespot.average_rating}/5</p>
        <p>{coffeespot.location}</p>
      </div>
    </div>
  );
}

export default CoffeeSpotCard;
