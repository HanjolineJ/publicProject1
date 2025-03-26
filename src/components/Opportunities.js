import React, { useState } from 'react';

const dummyOpps = [
  { id: 101, title: 'Frontend Developer Intern' },
  { id: 102, title: 'UX Research Summer' },
  { id: 103, title: 'Backend Developer Assistant' },
  { id: 104, title: 'Data Analyst Internship' },
  { id: 105, title: 'AI Lab Internship' },
  // Add more as needed
];

function Opportunities() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleOpps = dummyOpps.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(dummyOpps.length / itemsPerPage);

  function handleClickOpp(opp) {
    alert(`Clicked on opportunity: ${opp.title} (ID: ${opp.id})`);
  }

  return (
    <div className="container mt-4">
      <h2>Opportunities</h2>
      <ul className="list-group">
        {visibleOpps.map((opp) => (
          <li
            key={opp.id}
            className="list-group-item"
            onClick={() => handleClickOpp(opp)}
            style={{ cursor: 'pointer' }}
          >
            {opp.title}
          </li>
        ))}
      </ul>
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

export default Opportunities;
