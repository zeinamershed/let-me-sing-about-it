import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

const SignUp = ({ setCurrUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    setError(null);     
    try {      

      const newUser = {       
        username,
        password,
        profileImage: image,
        favorites: []
      };

      const { data } = await axios.post(`${API_URL}/users`, newUser);
      console.log('User created:', data);
      setCurrUser(data);
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error);
      setError('An error occurred while creating the user. Please try again later.');
    }
    
  }

  return (
    <div className='for-all-divs'>
      <h1>New here? Sign up!</h1>
      <div>
        <form onSubmit={handleSignUp} className='sign-up-form'>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Profile picture URL:
            <input
              name="image"
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </label>

          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up!</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp