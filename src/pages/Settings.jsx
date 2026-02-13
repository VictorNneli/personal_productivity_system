import React, { useState } from "react";
import "./settings.css";

export default function Settings() {
  const [active, setActive] = useState("system");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo">Productivity</span>
          <ul>
            {/* <li>Dashboard</li>
            <li>Profile</li>
            <li>Tax Manager</li>
            <li className="active">Settings</li> */}
          </ul>
        </div>

        <div className="nav-right">
          <span>Welcome Sammy</span>
          <img
            src="c:\Users\Nneli\Downloads\WhatsApp Image 2025-08-29 at 1.36.41 PM.jpeg"
            alt="avatar"
            className="avatar"
          />
        </div>
      </nav>

      {/* BODY */}
      <div className="settings-container">
        {/* SIDEBAR */}
        <aside
         className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}
         onMouseEnter={() => setSidebarOpen(true)}
         onMouseLeave={() => setSidebarOpen(false)}
        >
          <button
            className={active === "system" ? "active" : ""}
            onClick={() => setActive("system")}
          >
            System Preferences
          </button>

          <button
            className={active === "notifications" ? "active" : ""}
            onClick={() => setActive("notifications")}
          >
            Notifications
          </button>

          <button
            className={active === "theme" ? "active" : ""}
            onClick={() => setActive("theme")}
          >
            Theme
          </button>

          <button
            className={active === "integrations" ? "active" : ""}
            onClick={() => setActive("integrations")}
          >
            Integrations
          </button>

          <button
            className={active === "export" ? "active" : ""}
            onClick={() => setActive("export")}
          >
            Data Export
          </button>
        </aside>

        {/* CONTENT */}
        <main className="content">
          {active === "system" && (
            <section>
              <h2>System Preferences</h2>

              <div className="card">
                <label>Language</label>
                <select>
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>

              <div className="card">
                <label>Time Zone</label>
                <select>
                  <option>Africa/Lagos</option>
                  <option>UTC</option>
                </select>
              </div>
            </section>
          )}

          {active === "notifications" && (
            <section>
              <h2>Notifications</h2>

              <div className="card toggle">
                <span>Email Notifications</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="card toggle">
                <span>Push Notifications</span>
                <input type="checkbox" />
              </div>
            </section>
          )}

          {active === "theme" && (
            <section>
              <h2>Theme</h2>

              <div className="card">
                <label>App Theme</label>
                <select>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
            </section>
          )}

          {active === "integrations" && (
            <section>
              <h2>Integrations</h2>

              <div className="card">
                <button className="connect-btn">Connect Google</button>
              </div>

              <div className="card">
                <button className="connect-btn">Connect Slack</button>
              </div>
            </section>
          )}

          {active === "export" && (
            <section>
              <h2>Data Export</h2>

              <div className="card">
                <button className="export-btn">Download Data</button>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
