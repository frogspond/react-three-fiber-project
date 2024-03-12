import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import More from './pages/More';
import Home from './pages/Home';
const App = () => {
  return (
    <main className="bg-slate-800">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
