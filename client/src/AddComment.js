import React, { useState } from "react";

function AddComment({ individualCoffeeSpot, setIndividualCoffeeSpot, user }) {
  const { id, rating } = individualCoffeeSpot;
  

  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState();

  function addComment(newComment) {
    setIndividualCoffeeSpot((v) => ({
      ...v,
      comments: [...v.comments, newComment],
    }));
  }

  function handleNewComment(e) {
    e.preventDefault();

    const data = {
      comment: newComment,
      rating: newRating,
      coffee_spot_id: id,
      user_id: user.id
    };
    fetch(`/newcomment/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => response.json()
    ).then(comment => addComment(comment));
  }

  return (
    <div>
      <form onSubmit={handleNewComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <input
          type="integer"
          value={rating}
          onChange={(e) => setNewRating(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddComment;
