import React from "react";
import { useNavigate } from "react-router-dom";

function CoffeeSpotCard({ coffeespot }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/IndividualCoffeeSpot/${coffeespot.id}/`);
  }

  

  return (
    <div
      onClick={handleNavigate}
      className="card text-white bg-white bg-opacity-25 shadow rounded"
      style={{ width: "350px", height: "400px", marginBottom: "15px" }} // Increased width and height to make the cards bigger
    >
      <img
        src={coffeespot.image_url}
        alt=""
        style={{
          width: "100%",
          height: "250px", 
          objectFit: "cover",
          borderTopLeftRadius: "0.25rem",
          borderTopRightRadius: "0.25rem",
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title text-white">{coffeespot.name}</h5>
        <p className="card-text text-white mb-0">
          {coffeespot.average_rating}/5
        </p>
        <p className="card-text text-white">{coffeespot.location}</p>
      </div>
    </div>
  );
}

export default CoffeeSpotCard;
