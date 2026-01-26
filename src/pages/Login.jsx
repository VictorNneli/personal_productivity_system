import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const useNavigater = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return;
    setIsLoggedIn(true);
    useNavigater('/dashboard');
  }
  return (<div style={{padding: 40}}>
  <h1>User Login</h1>
  <form onSubmit={handleSubmit}>
    <input
    placeholder='Enter Username'
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
   <br /><br />
    <button type="submit">Login</button>
  </form>
  </div>
  )
}

export default Login