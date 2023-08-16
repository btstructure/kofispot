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
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center text-white">
            {individualCoffeeSpot.name}
          </h1>
          <div className="d-flex justify-content-center mb-3">
            <img
              style={{
                height: 400,
                width: "100%",
                objectFit: "cover",
              }}
              src={individualCoffeeSpot.image_url}
              alt={individualCoffeeSpot.name}
            />
          </div>
          <div className="py-2 text-center">
            <div className="rounded p-3"
             style={{
              backgroundColor: "rgba(205,170,130)",
              overflow: "hidden",
              width: "100%",
            }}>
              {individualCoffeeSpot.average_rating ? (
                <>
                  <p>Rating: {individualCoffeeSpot.average_rating}/5</p>
                  <p>Address: {individualCoffeeSpot.location}</p>
                  <p>Phone Number: {individualCoffeeSpot.phonenumber}</p>
                  <p>Description: {individualCoffeeSpot.description}</p>
                </>
              ) : (
                <>
                  <p>Be the first to give a rating!!</p>
                  <p>Address: {individualCoffeeSpot.location}</p>
                  <p>Phone Number: {individualCoffeeSpot.phonenumber}</p>
                  <p>Description: {individualCoffeeSpot.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div className="d-flex flex-column h-100">
            {user &&
              individualCoffeeSpot["comments"]?.map((comment, e) => (
                <IndividualCoffeeCommentCard
                  key={e}
                  comment={comment}
                  individualCoffeeSpot={individualCoffeeSpot}
                  setIndividualCoffeeSpot={setIndividualCoffeeSpot}
                  user={user}
                />
              ))}
            <div className="d-flex justify-content-center align-items-center mt-auto mb-3">
              <AddComment
                individualCoffeeSpot={individualCoffeeSpot}
                setIndividualCoffeeSpot={setIndividualCoffeeSpot}
                user={user}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualCoffeeSpot;
