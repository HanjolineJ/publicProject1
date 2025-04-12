import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    fetch("http://138.197.99.80:2490/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error loading users", err));
  }, []);

  const totalPages = Math.ceil(users.length / perPage);
  const visibleUsers = users.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {visibleUsers.map((user) => (
          <li key={user.id} className="list-group-item">
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

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
