import React, { useState, useEffect } from "react";
import IndividualCoffeeCommentCard from "./IndividualCoffeeCommentCard";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";

function IndividualCoffeeSpot({ user }) {
  const [individualCoffeeSpot, setIndividualCoffeeSpot] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`/coffeespots/${id}`)
      .then((response) => response.json())
      .then(setIndividualCoffeeSpot);
  }, []);

  return (
    <div>
      <div className="text-white text-center">
        <p>{individualCoffeeSpot.name}</p>
        <img style={{height: '400px', width: '600px'}}  src={individualCoffeeSpot.image_url} />
        <p>{individualCoffeeSpot.average_rating}/5</p>
        <p>{individualCoffeeSpot.location}</p>
        <p>{individualCoffeeSpot.phonenumber}</p>
        <p>{individualCoffeeSpot.description}</p>
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
        <AddComment
          individualCoffeeSpot={individualCoffeeSpot}
          setIndividualCoffeeSpot={setIndividualCoffeeSpot}
          user={user}
        />
      </div>
    </div>
  );
}

export default IndividualCoffeeSpot;
