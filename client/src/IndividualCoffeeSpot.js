import React, { useState, useEffect } from "react";
import IndividualCoffeeCommentCard from "./IndividualCoffeeCommentCard";
import { useParams } from "react-router-dom";

function IndividualCoffeeSpot() {
  const [individualCoffeeSpot, setIndividualCoffeeSpot] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`/coffeespots/${id}`)
      .then((response) => response.json())
      .then(setIndividualCoffeeSpot);
  }, []);

  return (
    <div>
      <div>
        <p>{individualCoffeeSpot.name}</p>
        <img src={individualCoffeeSpot.image_url} />
        <p>{individualCoffeeSpot.location}</p>
        <p>{individualCoffeeSpot.phonenumber}</p>
        <p>{individualCoffeeSpot.description}</p>
        <p>{individualCoffeeSpot.average_rating}/5</p>
      </div>
    </div>
  );
}

export default IndividualCoffeeSpot;
