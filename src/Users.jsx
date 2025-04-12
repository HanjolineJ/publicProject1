import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    fetch("http://138.197.99.80:2490/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users", err));
  }, []);

  const totalPages = Math.ceil(users.length / perPage);
  const start = (page - 1) * perPage;
  const visibleUsers = users.slice(start, start + perPage);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {visibleUsers.map((user) => (
          <li
            key={user.id}
            className="list-group-item"
            onClick={() => alert(`Clicked: ${user.name}`)}
            style={{ cursor: "pointer" }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      <div className="mt-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm ${page === i + 1 ? "btn-primary" : "btn-outline-primary"} mx-1`}
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
