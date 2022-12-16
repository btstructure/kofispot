import React, { useState } from "react";
import ManipulateComment from "./ManipulateComment";

function IndividualCoffeeCommentCard({
  comment,
  setIndividualCoffeeSpot,
  user,
  individualCoffeeSpot,
}) {
  console.log(individualCoffeeSpot);
  const [editComment, setEditComment] = useState("");
  function handleSave(e) {
    e.preventDefault();
    fetch(`/api/newcomment/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: editComment,
      }),
    })
      .then((response) => response.json())
      .then((d) => {
        const edit = individualCoffeeSpot.comments.filter((e) => e.id !== d.id);
        setIndividualCoffeeSpot((currentCoffeeSpot) => {
          return { ...currentCoffeeSpot, comments: [...edit, d] };
        });
        setEditComment("");
      });
  }

  return (
    <div>
      <p>{comment.user.username}</p>
      {editComment ? (
        <form onSubmit={handleSave}>
          <input
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
          />
          <button>Save</button>
        </form>
      ) : (
        <p>
          {comment.comment} {comment.rating}
        </p>
      )}
      {comment.user.id === user.id && (
        <ManipulateComment
          comment={comment}
          individualCoffeeSpot={individualCoffeeSpot}
          setIndividualCoffeeSpot={setIndividualCoffeeSpot}
          setEditComment={setEditComment}
          editComment={editComment}
        />
      )}
    </div>
  );
}

export default IndividualCoffeeCommentCard;
