import React from 'react';

function Dashboard({ user }) {
  // Later you’ll pull projects from DynamoDB
  return (
    <div>
      <h2>Your Projects</h2>
      <ul>
        <li>Project A - 2024</li>
        <li>Project B - 2023</li>
      </ul>
      <button>Add New Project</button>
    </div>
  );
}

export default Dashboard;
