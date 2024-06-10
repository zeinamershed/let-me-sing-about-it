import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const nav = useNavigate();
    function handleNavigate() {
      console.log("navigate to home");
      nav("/");
    }
    return (
      <div className="not-found-container">
        <br/>
        <h1>404 Not Found</h1>
        <br/>
        <h2>Oops, the page you're looking for does not exist.</h2>
        <br/>
        <br/>
        <button onClick={handleNavigate}>Home</button>
      </div>
    );
  };

export default NotFound