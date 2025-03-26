import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your page components (we'll define them next).
import Home from './components/Home';
import Users from './components/Users';
import Opportunities from './components/Opportunities';
import Profile from './components/Profile';
import AdminPanel from './components/AdminPanel';
// Import modals for Login & Signup
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';

function App() {
  const [loginStatus, setLoginStatus] = useState('none'); 
  // loginStatus can be 'none', 'user', or 'admin'.
  
  // Controls for showing/hiding modals
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <div>
        {/* Simple navigation bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Project1</Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              {/* Only show Users, Opportunities, Profile if logged in (user or admin) */}
              {(loginStatus !== 'none') && (
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
              {/* Only show Admin Panel if admin */}
              {loginStatus === 'admin' && (
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle btn btn-link" id="adminDropdown" data-toggle="dropdown">
                    Admin Panel
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/admin/approve-posted">Approve Posted</Link>
                    <Link className="dropdown-item" to="/admin/approve-new-user">Approve New User</Link>
                  </div>
                </li>
              )}
            </ul>
            {/* If not logged in, show Login & Signup buttons */}
            {loginStatus === 'none' && (
              <div className="ml-auto">
                <button className="btn btn-outline-primary mr-2" onClick={() => setShowLogin(true)}>
                  Login
                </button>
                <button className="btn btn-outline-success" onClick={() => setShowSignup(true)}>
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Define our routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/approve-posted" element={<AdminPanel dataType="posted" />} />
          <Route path="/admin/approve-new-user" element={<AdminPanel dataType="newUser" />} />
        </Routes>

        {/* Footer area to switch login states (requirement #1) */}
        <div className="text-center mt-5">
          <p>Toggle login status:</p>
          <button className="btn btn-secondary mr-2" onClick={() => setLoginStatus('none')}>
            Not Logged In
          </button>
          <button className="btn btn-secondary mr-2" onClick={() => setLoginStatus('user')}>
            User Logged In
          </button>
          <button className="btn btn-secondary" onClick={() => setLoginStatus('admin')}>
            Admin Logged In
          </button>
        </div>

        {/* Modal Components */}
        <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
        <SignupModal show={showSignup} onClose={() => setShowSignup(false)} />
      </div>
    </Router>
  );
}

export default App;
