import React from "react";
import { useNavigate } from "react-router-dom";

function CoffeeSpotCard({ coffeespot }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/IndividualCoffeeSpot/${coffeespot.id}/`);
  }

  return (
    <div>
      <div onClick={handleNavigate} coffeespot={coffeespot}>
        <p className="text-white d-flex justify-content-center">
          {coffeespot.name}
        </p>
        <div className="d-flex justify-content-center"
        >
          <img
            src={coffeespot.image_url}
            alt=""
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
            }}
            className="rounded-circle"
          />
        </div>
        <p className="text-white d-flex justify-content-center">
          {coffeespot.average_rating}/5
        </p>
        <p className="text-white d-flex justify-content-center">
          {coffeespot.location}
        </p>
      </div>
    </div>
  );
}

export default CoffeeSpotCard;
