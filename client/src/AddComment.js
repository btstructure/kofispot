import React, { useState } from "react";

function AddComment({ setIndividualCoffeeSpot }) {
  const [newComment, setNewComment] = useState("");

  function addComment(newComment) {
    setIndividualCoffeeSpot((v) => ({
      ...v,
      comments: [...v.comments, newComment],
    }));
  }

  function handleNewComment(e) {
    e.preventDefault();
    fetch("/newcomment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: newComment,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((comment) => addComment(comment));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleNewComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </form>
    </div>
  );
}

export default AddComment;
