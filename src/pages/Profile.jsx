import React from 'react';
import './Profile.css';
import { useNavigate } from "react-router-dom";




function Profile({ setIsLoggedIn }) {
    const navigate = useNavigate();
  
    function handleLogout() {
      setIsLoggedIn(false);
      navigate("/");
    }
  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <div className="avatar">JD</div>
          <h2>Samuel</h2>
          <p>sammy@email.com</p>
        </div>

        <div className="profile-info">
          <h3>Account Information</h3>

          <div className="info-row">
            <span>Username</span>
            <span>Sammy</span>
          </div>

          <div className="info-row">
            <span>Email</span>
            <span>sammy@email.com</span>
          </div>

          <div className="info-row">
            <span>Joined</span>
            <span>January 2026</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}
export default Profile;
