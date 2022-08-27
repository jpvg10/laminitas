import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-blue-500 sticky top-0 z-50 py-4 w-full mb-5">
    <ul className="flex justify-center text-white font-bold">
      <li className="mr-5">
        <Link to="/">Home</Link>
      </li>
      <li className="mr-5">
        <Link to="/exchange">Exchange</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
