import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Navbar({setIsLoggedIn}) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate('/');}

    return (
    <div style={{
      display: "flex",
      gap: 15,
      padding: 15,
      background: "#6cca14ff",
      color: "white"
    }}>
      <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
      <Link to="/taskmanager" style={{ color: "white" }}>Tasks</Link>
      <Link to="/profile" style={{ color: "white" }}>Profile</Link>
      <Link to="/settings" style={{ color: "white" }}>Settings</Link>
      <button
        onClick={handleLogout}
        style={{ marginLeft: "auto", cursor: "pointer" }}
      >
        Logout
      </button>
      </div>
    );
}

export default Navbar