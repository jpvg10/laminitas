import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <main className="relative">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </Router>
);
export default App;
