import React from "react";
import HanProfess from "../images/HanProfessP1.jpeg";

function AdminPanel({ dataType }) {
  return (
    <div className="container mt-4">
      <h2>Admin Approval Panel</h2>
      <p>{dataType === "posted" ? "Approve Posted Opportunities" : "Approve New Users"}</p>
      <img src={HanProfess} alt="Professor" className="img-thumbnail" style={{ maxWidth: "300px" }} />
    </div>
  );
}

export default AdminPanel;
