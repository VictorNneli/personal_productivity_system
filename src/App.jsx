import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';  
import Profile from './pages/Profile';
import Taskmanager from './pages/Taskmanager';
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from './pages/Settings';
import './App.css'


function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route
         path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>
         } />

        <Route
          path="/dashboard"
          element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Dashboard />
          </ProtectedRoute>
        }/>

        <Route
         path="/taskmanager"
         element={
         <ProtectedRoute isLoggedIn={isLoggedIn}>
         <Taskmanager />
         </ProtectedRoute>
        }/>

        <Route
         path="/profile"
         element={
         <ProtectedRoute isLoggedIn={isLoggedIn}>
         <Profile />
         </ProtectedRoute>
        }/>

        <Route
         path="/settings"
         element={
         <ProtectedRoute isLoggedIn={isLoggedIn}>
         <Settings />
         </ProtectedRoute>
        }/>

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
