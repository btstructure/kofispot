import React, { useState } from "react";

function ManipulateComment({ comment, setIndividualCoffeeSpot }) {
  const [editComment, setEditComment] = useState(comment);

  function handleDelete() {
    fetch(`/deletecomment/${comment.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(
        setIndividualCoffeeSpot((v) => ({
          ...v,
          comments: v.comments.filter((e) => e != comment),
        }))
      );
  }

  function handleEditComment() {
    fetch(`/comment/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: editComment,
      }),
    })
      .then((response) => response.json())
      .then(setIndividualCoffeeSpot());
  }

  return (
    <div>
      <button onClick={handleDelete}>x</button>
      <button onClick={handleEditComment}>Edit comment</button>
    </div>
  );
}

export default ManipulateComment;
