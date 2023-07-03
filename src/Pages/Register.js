import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AdminNav from '../components/AdminNav'
import '../styles/register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the registration request to the server
      const response = await fetch('https://mnmuslims-api.onrender.com/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      navigate('/accounts')

      const data = await response.json();
      console.log(data); // Registration response from the server
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <AdminNav/>
      <div className='register-details'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className='register-button'>
            <button type="submit">Register</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Register;
