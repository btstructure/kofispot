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

  function handleAbout() {
    navigate("/About");
  }

  function handleHome() {
    navigate("/Home");
  }

  return (
    <div>
      <div>
        <nav className="navbar">
          <ul>
            <li>KofiSpot</li>
            <li>Welcome {user.username}!</li>
            <li>
              <p onClick={handleHome}>Home</p>
            </li>
            <li>
              <p onClick={handleAbout}>About</p>
            </li>
            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
