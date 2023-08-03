import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyProfile({ user, setUser }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    fetch(`/api/users/${user.username}/update_password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          password: password,
          password_confirmation: confirmPassword,
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("Password successfully updated");
        } else {
          setError("Failed to update password");
        }
      })
      .catch((error) => {
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="container mx-auto my-5 p-4 rounded bg-white bg-opacity-50 text-white" style={{ maxWidth: "500px" }}>
      <h1>My Profile</h1>
      <h2>Username: {user.username}</h2>
      {error && <p className="text-danger">{error}</p>}
      {successMessage && <p className="text-success">{successMessage}</p>}
      <Form onSubmit={handlePasswordChange} className="d-flex flex-column align-items-center">
        <Form.Group className="mt-4">
          <Form.Label className="mr-2">New Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-l-md px-2 py-1"
          />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label className="mr-2">Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-l-md px-2 py-1"
          />
        </Form.Group>
        <Button
          type="submit"
          className="mt-4 btn btn-primary"
        >
          Change Password
        </Button>
      </Form>
    </div>
  );
}

export default MyProfile;
