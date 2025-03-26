import React from 'react';
import '/Users/hanjo/WebProject/project1/src/Admin.css';

function AdminPanel({ dataType }) {
  let adminData = [];

  if (dataType === 'posted') {
    adminData = [
      { id: 1, info: 'Posted Opportunity #1' },
      { id: 2, info: 'Posted Opportunity #2' },
    ];
  } else if (dataType === 'newUser') {
    adminData = [
      { id: 10, info: 'New User: Alice' },
      { id: 11, info: 'New User: Bob' },
    ];
  }

  return (
    <div className="container mt-4">
      <h2>Admin Approval Panel</h2>
      <p>Showing: {dataType === 'posted' ? 'Approve Posted' : 'Approve New User'}</p>
      <ul className="list-group">
        {adminData.map(item => (
          <li key={item.id} className="list-group-item">
            {item.info}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;

