import React, { useState } from "react";

function AddComment({ individualCoffeeSpot, setIndividualCoffeeSpot, user }) {
  const { id, rating } = individualCoffeeSpot;
  console.log(individualCoffeeSpot);

  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(1);

  function addComment(newComment) {
    setIndividualCoffeeSpot((v) => ({
      ...v,
      comments: [...v.comments, newComment],
      average_rating:
        v.average_rating + (newRating - v.average_rating) / (v.comments.length  + 1),
    }));
  }

  function handleNewComment(e) {
    e.preventDefault();

    const data = {
      comment: newComment,
      rating: newRating,
      coffee_spot_id: id,
      user_id: user.id,
    };
    fetch(`/newcomment/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((comment) => {
        addComment(comment);
      });
  }

  return (
    <div>
      <form onSubmit={handleNewComment}>
        <input
          type="text"
          value={newComment}
          required
          onChange={(e) => setNewComment(e.target.value)}
        />
        <select
          value={rating}
          type="integer"
          defaultValue={"default"}
          onChange={(e) => setNewRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddComment;
