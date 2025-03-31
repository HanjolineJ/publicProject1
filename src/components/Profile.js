import React from 'react';
import HanProfessP1 from '../images/HanRowingP1.webp'; // Import the image

function Profile() {
  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      {/* Image */}
      <img
        src={HanProfessP1}
        alt="Profile"
        style={{ borderRadius: '15%',
        width: '200px', // Adjust the width as needed
        height: '200px', // Adjust the height as needed
        objectFit: 'cover', // Maintain aspect ratio
        border: '2px solid #000', // Optional: Add a border
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow
        marginBottom: '20px', // Optional: Add margin below the image
        display: 'block', // Center the image
         }}

      />
      <div className="mt-3">
        <p><strong>Name:</strong> Hanjoline Julceus </p>
        <p><strong>Email:</strong> hanjolinej@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
