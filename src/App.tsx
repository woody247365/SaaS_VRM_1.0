import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Vendors from './pages/Vendors';
import Tasks from './pages/Tasks';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/vendors/*" element={<Vendors />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}