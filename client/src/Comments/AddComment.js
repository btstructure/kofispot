import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import {Form, FormControl} from 'react-bootstrap'

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
        v.average_rating +
        (newRating - v.average_rating) / (v.comments.length + 1),
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
        addComment(comment);
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
            resize: 'none',
            height: '100px',
            width: '500px'
          }}
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
        <div className="p-2 justify-content-center d-flex">
          <Button variant="secondary"  type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default AddComment;
