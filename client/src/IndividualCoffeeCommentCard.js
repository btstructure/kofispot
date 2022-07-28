import React from "react";
import ManipulateComment from "./ManipulateComment";

function IndividualCoffeeCommentCard({ comment, setIndividualCoffeeSpot }) {
  return (
    <div>
      <p>
        {comment.comment} {comment.rating}
      </p>
      <ManipulateComment comment={comment} setIndividualCoffeeSpot={setIndividualCoffeeSpot}/>
    </div>
  );
}

export default IndividualCoffeeCommentCard;
