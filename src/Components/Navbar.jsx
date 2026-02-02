import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/taskmanager">Tasks</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
