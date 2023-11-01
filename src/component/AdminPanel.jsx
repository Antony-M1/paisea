import React from 'react'

const AdminPanel = ({ setIsLoggedIn }) => {
  const handleClick = () => {
    alert('You are logged Out');
    setIsLoggedIn(false);
  };
  return (
    <div className="AdminPanel">
      <h1>Welcome To Admin Panel</h1>
      <button onClick={handleClick}>
        <span className="log-out">Log Out</span>
      </button>
    </div>
  );
};

export default AdminPanel