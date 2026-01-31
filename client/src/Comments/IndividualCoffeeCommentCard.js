import React, { useState } from "react";
import ManipulateComment from "./ManipulateComment";
import { FaStar } from "react-icons/fa";

function IndividualCoffeeCommentCard({
  comment,
  setIndividualCoffeeSpot,
  user,
  individualCoffeeSpot,
}) {
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
    <div className="p-2 d-flex justify-content-center text-black">
      <div
        className="border rounded p-3"
        style={{
          backgroundColor: "rgba(205,170,130)",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div>
          <p className="d-flex justify-content-center">
            User: {comment.user.username}
          </p>
          {comment.rating} <FaStar />
        </div>

        {editComment ? (
          <form onSubmit={handleSave} className="d-flex justify-content-center">
            <input
              value={editComment}
              onChange={(e) => setEditComment(e.target.value)}
              className="form-control mb-2"
            />
            <button type="submit" className="btn btn-primary btn-sm">
              Save
            </button>
          </form>
        ) : (
          <p>{comment.comment}</p>
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
    </div>
  );
}

export default IndividualCoffeeCommentCard;
