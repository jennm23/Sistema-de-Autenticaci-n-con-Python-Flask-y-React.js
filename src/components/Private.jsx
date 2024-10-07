import React from 'react';
import { Navigate } from 'react-router-dom';

function Private() {
  const token = sessionStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6 text-center">
      <h1 className="mb-4">Private Page</h1>
      <button className="btn btn-danger" onClick={() => { sessionStorage.removeItem('token'); window.location.href = '/login'; }}>
        Log out
      </button>
    </div>
  </div>
</div>
  );
}

export default Private;
