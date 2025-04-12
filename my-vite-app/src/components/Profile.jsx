import React from "react";
import HanRowing from "../images/HanRowingP1.webp";
import "../index.css";
import "../App.css";

function Profile() {
  return (
    <div className="container mt-4">
      <h2>Hanjoline Julceus Profile</h2>
      <img src={HanRowing} alt="Rowing" className="img-fluid rounded" style={{ maxWidth: "300px" }} />
      <p>This is my profile view.</p>
        <p>My name is Hanjoline Julceus</p>
        <p>I am a student at the Stetson University</p>
        <p>I am a Computer Science and Cybersecurity major</p>
        <p>I am a junior</p>
    </div>
  );
}

export default Profile;
