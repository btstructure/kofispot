import React, { useState, useEffect } from "react";
import IndividualCoffeeCommentCard from "./IndividualCoffeeCommentCard";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";

function IndividualCoffeeSpot({ user }) {
  const [individualCoffeeSpot, setIndividualCoffeeSpot] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`/api/coffeespots/${id}`)
      .then((response) => response.json())
      .then(setIndividualCoffeeSpot);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center text-white">
      <div>
        <p className="d-flex justify-content-center fs-1">
          {individualCoffeeSpot.name}
        </p>
        <div className="justify-content-center align-items-center d-flex">
          <img
            style={{
              height: 400,
              width: 800,
              objectFit: "cover",
            }}
            src={individualCoffeeSpot.image_url}
          />
        </div>
        <div className="py-2">
        <p className="justify-content-center d-flex">
          {individualCoffeeSpot.average_rating}/5
        </p>
        <p className="justify-content-center d-flex">
          {individualCoffeeSpot.location}
        </p>
        <p className="justify-content-center d-flex">
          {individualCoffeeSpot.phonenumber}
        </p>
        <p className="justify-content-center d-flex">
          {individualCoffeeSpot.description}
        </p>
        </div>
        <div>
          {user &&
            individualCoffeeSpot["comments"]?.map((comment, e) => (
              <div className="d-flex justify-content-center align-items-center">
                <IndividualCoffeeCommentCard
                  key={e}
                  comment={comment}
                  individualCoffeeSpot={individualCoffeeSpot}
                  setIndividualCoffeeSpot={setIndividualCoffeeSpot}
                  user={user}
                />
              </div>
            ))}
        </div>
        <div className="justify-content-center d-flex">
          <AddComment
            individualCoffeeSpot={individualCoffeeSpot}
            setIndividualCoffeeSpot={setIndividualCoffeeSpot}
            user={user}
          />
        </div>
      </div>
    </div>
  );
}

export default IndividualCoffeeSpot;
