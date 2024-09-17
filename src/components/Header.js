import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management System</h1>
        <nav>
          <Link to="/" className="hover:underline mr-4">Home</Link>
          <Link to="/create" className="hover:underline">Add User</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;