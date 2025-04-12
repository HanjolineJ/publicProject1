import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://138.197.99.80:2490/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user detail", err));
  }, [id]);

  if (!user) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>User Detail for {user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Include other user fields as needed */}
      <Link to="/users" className="btn btn-secondary mt-3">
        Back to Users
      </Link>
    </div>
  );
}

export default UserDetail;
