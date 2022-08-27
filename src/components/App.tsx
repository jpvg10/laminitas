import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Exchange from './Exchange';
import Home from './Home';
import Navbar from './Navbar';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <main className="relative">
      <div className="px-2 flex flex-col items-center">
        <h1 className="text-3xl text-gray-700 font-bold mb-5">Laminitas</h1>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </main>
  </Router>
);
export default App;
