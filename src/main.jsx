import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/challenges/:categoryId" element={<Challenges />} />
        <Route path="/challenge/:challengeId" element={<ChallengeDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);