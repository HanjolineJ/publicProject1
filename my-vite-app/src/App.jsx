import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Opportunities from "./components/Opportunities.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import Profile from "./components/Profile.jsx";
import Users from "./components/Users.jsx";

//import LoginModal from "./components/LoginModal.jsx";
//import SignupModal from "./components/SignupModal.jsx";


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/opportunities">Opportunities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admin Panel</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/admin" element={<AdminPanel dataType="posted" />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
