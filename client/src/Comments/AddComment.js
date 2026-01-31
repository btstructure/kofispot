import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, FormControl } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function AddComment({ individualCoffeeSpot, setIndividualCoffeeSpot, user }) {
  const { id } = individualCoffeeSpot;

  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(1);

  function addComment(newComment) {
    const updatedComments = [...individualCoffeeSpot.comments, newComment];
    const updatedAverageRating =
      updatedComments.reduce((sum, comment) => sum + comment.rating, 0) /
      updatedComments.length;
    setIndividualCoffeeSpot((v) => ({
      ...v,
      comments: [...v.comments, newComment],
      average_rating: updatedAverageRating.toFixed(2),
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
    fetch(`/api/newcomment/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((comment) => {
        addComment(comment, newRating);
        setNewComment("");
        setNewRating(1);
      });
  }

  return (
    <div>
      <Form onSubmit={handleNewComment}>
        <FormControl
          type="text"
          value={newComment}
          required
          onChange={(e) => setNewComment(e.target.value)}
          as="textarea"
          rows="2"
          placeholder="Enter your comment..."
          maxLength="200"
          style={{
            resize: "none",
            height: "100px",
            width: "500px",
          }}
        />
        <div className="star-rating py-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <FaStar
              key={value}
              color={value <= newRating ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setNewRating(value)}
              onMouseLeave={() => {}}
              size={30}
              onClick={() => setNewRating(value)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        <div className="p-2 justify-content-center d-flex">
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddComment;
