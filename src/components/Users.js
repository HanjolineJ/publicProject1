import React, { useState } from 'react';
import '/Users/hanjo/WebProject/project1/src/Users.css';

const dummyUsers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Daisy' },
  { id: 5, name: 'Eric' },
  { id: 6, name: 'Frances' },
  { id: 7, name: 'George' },
  // hard coded users
];

function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 3 or 5 

  // Calculate visible items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleUsers = dummyUsers.slice(startIndex, startIndex + itemsPerPage);

  // Number of pages
  const totalPages = Math.ceil(dummyUsers.length / itemsPerPage);

  function handleClickUser(user) {
    // For now, just alert.
    alert(`Clicked on user: ${user.name} (ID: ${user.id})`);
  }

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {visibleUsers.map((user) => (
          <li
            key={user.id}
            className="list-group-item"
            onClick={() => handleClickUser(user)}
            style={{ cursor: 'pointer' }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="mt-3">
        <button
          className="btn btn-secondary mr-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
        <p className="mt-2">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Users;
