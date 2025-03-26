import React from 'react';
import HanProfessP1 from './HanProfessP1.jpeg'; // Import the image

function Profile() {
  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      {/* Image */}
      <img
        src={HanProfessP1}
        alt="Profile"
        style={{ borderRadius: '100%' }}
      />
      <div className="mt-3">
        <p><strong>Name:</strong> Hanjoline Julceus </p>
        <p><strong>Email:</strong> hanjolinej@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
