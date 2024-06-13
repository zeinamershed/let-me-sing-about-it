import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

const LogInn = ({ setCurrUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError(null); 
    try {
      const { data } = await axios.get(`${API_URL}/users`);
      console.log('Fetched users:', data); 

      const foundUser = data.find((user) => user.username === username);
      console.log('Found user:', foundUser); 

      if (!foundUser) {
        setError('User or password incorrect. Make sure to login with valid credentials');
        return;
      }

      
      const doesPassMatch = foundUser.password.toString() === password;
      if (!doesPassMatch) {
        setError('User or password incorrect. Make sure to login with valid credentials');
        return;
      }

      setCurrUser(foundUser);
      console.log('Current user set:', foundUser); 
      navigate('/');
    } catch (error) {
      console.error('Error finding user:', error);
      setError('An error occurred while trying to log in. Please try again later.');
    }
  }

  return (
    <div className="for-all-divs">
      <h1>Welcome back!</h1>
      <div>
        <form onSubmit={handleLogin} className="sign-up-form">
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={username}
              placeholder='your username'
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              placeholder='your password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>          
          <button type="submit">Login!</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LogInn;
