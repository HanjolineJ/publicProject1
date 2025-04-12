import React, { useState } from "react";

function AdminPanel() {
  const [dataType, setDataType] = useState("posted");

  const dummyData = {
    posted: ["Opportunity A", "Opportunity B", "Opportunity C"],
    newUser: ["User X", "User Y", "User Z"]
  };

  return (
    <div className="container mt-4">
      <h2>Admin Approval Panel</h2>
      <div className="btn-group mb-3">
        <button className={`btn ${dataType === "posted" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setDataType("posted")}>
          Approve Posted
        </button>
        <button className={`btn ${dataType === "newUser" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setDataType("newUser")}>
          Approve New User
        </button>
      </div>
      <ul className="list-group">
        {dummyData[dataType].map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
