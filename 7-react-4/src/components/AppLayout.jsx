import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
// import { useUser } from "../UserContext";

import "../style/appLayout.css";

export default function AppLayout() {
  const exitApp = () => {};
  return (
    <div className="app">
      <div className="title">
        <h1>NEU Github App</h1>
      </div>
      <div className="header">
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <Link to="/app">Profile</Link>
            </li>
            <li>
              <Link to="/app/repositories">Repositories</Link>
            </li>
            <li>
              <button className="exit-button" onClick={() => exitApp()}>
                Exit App
              </button>
            </li>
          </ul>
        </nav>
        <div>Welcome 👋 Cristian</div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
