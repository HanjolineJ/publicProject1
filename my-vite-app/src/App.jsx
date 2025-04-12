import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Users from "./components/Users.jsx";
import Opportunities from "./components/Opportunities.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import Profile from "./components/Profile.jsx";
import UserDetail from "./components/UserDetail.jsx";
import OpportunityDetail from "./components/OpportunityDetail.jsx";

function App() {
  const [userType, setUserType] = useState("guest"); // "guest", "user", or "admin"

  return (
    <>
      <Router>
        <div className="container mt-4">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {userType !== "guest" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/opportunities">Opportunities</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                </>
              )}
              {userType === "admin" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin Panel</Link>
                </li>
              )}
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            {userType !== "guest" && <Route path="/users" element={<Users />} />}
            {userType !== "guest" && <Route path="/users/:id" element={<UserDetail />} />}
            {userType !== "guest" && <Route path="/opportunities" element={<Opportunities />} />}
            {userType !== "guest" && <Route path="/opportunities/:id" element={<OpportunityDetail />} />}
            {userType !== "guest" && <Route path="/profile" element={<Profile />} />}
            {userType === "admin" && <Route path="/admin" element={<AdminPanel />} />}
          </Routes>
        </div>
      </Router>

      {/* Login state toggle button fixed at the bottom */}
      <div className="fixed-bottom bg-light text-center p-2">
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="guest">Not Logged In</option>
          <option value="user">User Logged In</option>
          <option value="admin">Admin Logged In</option>
        </select>
      </div>
    </>
  );
}

export default App;
