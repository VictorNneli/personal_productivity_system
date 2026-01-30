import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
  

function Login({ setIsLoggedIn }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const useNavigater = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;
    setIsLoggedIn(true);
    useNavigater('/dashboard');
  }
  
  return (<div className='loginContainer' style={{padding: 40}}>
    <h1 className='login_header'>Personal Productive System</h1>

  <h1>User Login</h1>
  <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label><br />
    <input
    id="username"
    type="text"
    placeholder='Enter Username'
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
   <br /><br />
   <label htmlFor="password">Password</label><br />
    <input
    id="password"
    type="password"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
         <br /><br />

    <button type="submit">Login</button>
  </form>
  </div>
  )
}

export default Login