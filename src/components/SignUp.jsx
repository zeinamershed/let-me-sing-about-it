import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';
import Confetti from 'react-confetti'

const SignUp = ({ setCurrUser }) => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  

  async function handleSignUp(e) {
    e.preventDefault();
    setError(null);     
    try {      

      const newUser = {       
        username,
        password,
        fullname,
        profileImage: image,
        favorites: [],
        joinedIn: Date.now()
      };

      const { data } = await axios.post(`${API_URL}/users`, newUser);
      console.log('User created:', data);
      setCurrUser(data);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        navigate('/');
      }, 5000);
    } catch (error) {
      console.error('Error creating user:', error);
      setError('An error occurred while creating the user. Please try again later.');
    }
    
  }

  return (
    <div className='for-all-divs'>
      {showConfetti && <Confetti />}
      <h1>New here? Sign up!</h1>
      <div>
        <form onSubmit={handleSignUp} className='sign-up-form'>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={username}
              placeholder='CouldBePIZZA'
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Fullname:
            <input
              name="fullname"
              type="text"
              value={fullname}
              placeholder='Harry Something Potter'
              onChange={(event) => setFullname(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              placeholder="*******"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Profile picture URL:
            <input
              name="image"
              type="text"
              value={image}
              placeholder=".png/.gif"
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