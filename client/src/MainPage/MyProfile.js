import React, { useState } from "react";

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
    <div className="text-white">
      <h1>My Profile</h1>
      <h2>Username: {user.username}</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handlePasswordChange}>
        <div className="mt-4">
          <label className="mr-2">New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-l-md px-2 py-1"
          />
        </div>
        <div className="mt-2">
          <label className="mr-2">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-l-md px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}

export default MyProfile;
