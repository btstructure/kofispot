import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ setUser }) {
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
        <p onClick={handleLogout}>Logout</p>
      </div>
    </div>
  );
}

export default NavBar;
