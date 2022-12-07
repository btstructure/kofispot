import React, { useState } from "react";

function ManipulateComment({
  comment,
  setIndividualCoffeeSpot,
  individualCoffeeSpot,
  setEditComment,
  editComment,
}) {
  function handleDelete() {
    fetch(`/deletecomment/${comment.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(
        setIndividualCoffeeSpot((v) => ({
          ...v,
          comments: v.comments.filter((e) => e != comment),
          average_rating:
          (v.average_rating * individualCoffeeSpot.comments.length - comment.rating) / (individualCoffeeSpot.comments.length - 1)
        }))
      );
  }

  return (
    <div>
      <button onClick={handleDelete}>x</button>
      <button
        onClick={() =>
          !editComment ? setEditComment(comment.comment) : setEditComment("")
        }
      >
        {editComment ? "Cancel" : "Edit Comment"}
      </button>
    </div>
  );
}

export default ManipulateComment;
