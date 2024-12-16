import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import BMICalculator from './components/bmi-calculator';
import DietPlans from './components/diet-plans';
import Educational from './components/educational';
import WaterTracker from './components/water-tracker';
import Workouts from './components/workouts';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login and Logout functions
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="app-header">
          <h1>30 Day Fitness Challenge</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bmi">BMI Calculator</Link></li>
              <li><Link to="/diet">Diet Plans</Link></li>
              <li><Link to="/workouts">Daily Workouts</Link></li>
              <li><Link to="/educational">Educational Content</Link></li>
              <li><Link to="/water">Water Tracker</Link></li>
              {!isAuthenticated ? (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Signup</Link></li>
                </>
              ) : (
                <li><button onClick={logout} className="logout-button">Logout</button></li>
              )}
            </ul>
          </nav>
        </header>

        {/* Main Routes */}
        <Routes>
          <Route path="/login" element={<LoginPage login={login} />} />
          <Route path="/signup" element={<SignupPage login={login} />} />
          <Route
            path="/bmi"
            element={
              <ProtectedRoute>
                <BMICalculator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/diet"
            element={
              <ProtectedRoute>
                <DietPlans />
              </ProtectedRoute>
            }
          />
          <Route
            path="/workouts"
            element={
              <ProtectedRoute>
                <Workouts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/educational"
            element={
              <ProtectedRoute>
                <Educational />
              </ProtectedRoute>
            }
          />
          <Route
            path="/water"
            element={
              <ProtectedRoute>
                <WaterTracker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <div className="home-page">
                <h2>Welcome to the 30-Day Fitness Challenge!</h2>
                <p>Your journey to a healthier and stronger you starts here.</p>
                <div className="home-cards">
                  <div className="card">
                    <h3>Daily Workouts</h3>
                    <p>Explore workout plans tailored for each day to keep you fit and active.</p>
                    <Link to="/workouts" className="card-button">View Workouts</Link>
                  </div>
                  <div className="card">
                    <h3>Diet Plans</h3>
                    <p>Follow healthy and balanced diet plans for each day of your challenge.</p>
                    <Link to="/diet" className="card-button">View Diet Plans</Link>
                  </div>
                  <div className="card">
                    <h3>BMI Calculator</h3>
                    <p>Calculate your Body Mass Index and track your fitness progress.</p>
                    <Link to="/bmi" className="card-button">Calculate BMI</Link>
                  </div>
                  <div className="card">
                    <h3>Educational Content</h3>
                    <p>Learn more about fitness, nutrition, and healthy living.</p>
                    <Link to="/educational" className="card-button">Explore Content</Link>
                  </div>
                  <div className="card">
                    <h3>Water Tracker</h3>
                    <p>Track your daily water intake to stay hydrated and healthy.</p>
                    <Link to="/water" className="card-button">Track Water</Link>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
