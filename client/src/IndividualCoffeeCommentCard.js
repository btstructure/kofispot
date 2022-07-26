import React from "react";

function IndividualCoffeeCommentCard({comment}) {
  return <div><p>{comment.comment} {comment.rating}</p></div>;
}

export default IndividualCoffeeCommentCard;
