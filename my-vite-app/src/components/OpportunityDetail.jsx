import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function OpportunityDetail() {
  const { id } = useParams();
  const [opp, setOpp] = useState(null);

  useEffect(() => {
    fetch(`http://138.197.99.80:2490/api/opportunities/${id}`)
      .then((res) => res.json())
      .then((data) => setOpp(data))
      .catch((err) => console.error("Error fetching opportunity detail", err));
  }, [id]);

  if (!opp) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Opportunity Detail for {opp.title}</h2>
      <p>Description: {opp.description}</p>
      <p>Salary: {opp.salary}</p>
      {/* Add any additional fields as needed */}
      <Link to="/opportunities" className="btn btn-secondary mt-3">
        Back to Opportunities
      </Link>
    </div>
  );
}

export default OpportunityDetail;
