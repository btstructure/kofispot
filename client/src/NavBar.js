import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }
  return (
    <div>
      <div>
        <nav>
          <p>Welcome {user.username}!</p>
          <p onClick={handleLogout}>Logout</p>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
