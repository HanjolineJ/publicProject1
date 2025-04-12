import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    fetch("http://138.197.99.80:2490/api/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched users:", data); // Inspect returned data in the browser's console
        setUsers(data);
      })
      .catch((err) => console.error("Error loading users", err));
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(users.length / perPage);
  const visibleUsers = users.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      {/* Display list of users */}
      <ul className="list-group">
        {visibleUsers.map((user) => (
          <li key={user._id} className="list-group-item">
            {/* Display full name if available; fallback to user_name */}
            <Link to={`/users/${user.user_name}`}>
              {user.first_name && user.last_name
                ? `${user.first_name} ${user.last_name}`
                : user.user_name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Numbered pagination */}
      <div className="mt-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm mx-1 ${page === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Users;
