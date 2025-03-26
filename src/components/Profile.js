import React from 'react';

function Profile() {
  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      {/* Image */}
      <img
        src="/HanProfessP1.jpeg"
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
