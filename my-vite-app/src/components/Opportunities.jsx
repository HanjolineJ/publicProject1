import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";

function Opportunities() {
  const [opps, setOpps] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    fetch("http://138.197.99.80:2490/api/opportunities")
      .then((res) => res.json())
      .then((data) => setOpps(data))
      .catch((err) => console.error("Error loading opportunities", err));
  }, []);

  const totalPages = Math.ceil(opps.length / perPage);
  const visibleOpps = opps.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container mt-4">
      <h2>Opportunities</h2>
      <ul className="list-group">
        {visibleOpps.map((opp) => (
          <li key={opp.id} className="list-group-item">
            <Link to={`/opportunities/${opp.id}`}>{opp.title}</Link>
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

export default Opportunities;
