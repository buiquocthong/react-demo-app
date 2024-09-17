import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './pages/UserManagement';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<UserManagement />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
