import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && password) {
      // In a real application, handle user registration here.
      login();       // Call the login function passed from App.js
      navigate('/'); // Redirect to the home page after signup
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="signup-page">
      <div className="form-container">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
