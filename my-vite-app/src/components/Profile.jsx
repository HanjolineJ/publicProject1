import React from "react";
import HanRowing from "../images/HanRowingP1.webp";

function Profile() {
  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      <img src={HanRowing} alt="Rowing" className="img-fluid rounded" style={{ maxWidth: "300px" }} />
      <p>This is your profile view. You can display image, name, and any info here.</p>
    </div>
  );
}

export default Profile;
