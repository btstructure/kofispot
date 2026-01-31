import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyProfile({ user }) {
  const [password, setPassword] = useState("");
  const [report, setReport] = useState(null);
  const [loadingReport, setLoadingReport] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch(`/api/reports/user_comments/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setReport(data);
      });
  }, [user.id]);

  const handleGenerateReport = () => {
    setLoadingReport(true);
    setError(null);

    fetch(`/api/reports/user_comments/${user.id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setReport(data))
      .catch(() => setError("Could not generate report"))
      .finally(() => setLoadingReport(false));
  };

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
    <div
      className="container mx-auto my-5 p-4 rounded bg-white bg-opacity-50 text-white"
      style={{ maxWidth: "500px" }}
    >
      <h1>My Profile</h1>
      <h2>Username: {user.username}</h2>
      {error && <p className="text-danger">{error}</p>}
      {successMessage && <p className="text-success">{successMessage}</p>}
      <Form
        onSubmit={handlePasswordChange}
        className="d-flex flex-column align-items-center"
      >
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
        <Button type="submit" className="mt-4 btn btn-primary">
          Change Password
        </Button>
      </Form>
      <hr className="my-4" />

      <Button
        variant="success"
        onClick={handleGenerateReport}
        disabled={loadingReport}
      >
        {loadingReport ? "Generating..." : "Generate My Comment Report"}
      </Button>
      {report && (
        <div className="mt-4 text-dark bg-light p-3 rounded">
          <h4>My Comment Report</h4>

          <p>
            <strong>Generated:</strong>{" "}
            {new Date(report.generated_at).toLocaleString()}
          </p>

          <p>
            <strong>Total Comments:</strong> {report.total_comments}
          </p>

          {report.most_commented_coffee_spot && (
            <p>
              <strong>Most Commented Coffee Spot:</strong>{" "}
              {report.most_commented_coffee_spot.coffee_spot_name} (
              {report.most_commented_coffee_spot.comment_count})
            </p>
          )}

          <hr />

          <ul className="list-group">
            {report.comments.map((comment, index) => (
              <li key={index} className="list-group-item">
                <strong>{comment.coffee_spot_name}</strong>
                <br />
                Rating: {comment.rating}
                <br />
                {comment.comment}
                <br />
                <small className="text-muted">
                  {new Date(comment.commented_at).toLocaleString()}
                </small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
