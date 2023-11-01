import React from 'react'

const LoginForm = ({ setIsLoggedIn }) => {

    const handleClick = () => {
        alert('Loged in Successfully')
        setIsLoggedIn(true);
    };

  return (
    <div className="login-main-container">
      <h2>Log In</h2>
      <button onClick={handleClick}>Log in</button>
    </div>
  );
};

export default LoginForm