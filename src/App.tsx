import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Encyclopedia from './pages/Encyclopedia';
import Protocol from './pages/Protocol';
import LeverCalculator from './pages/LeverCalculator';
import SitTrainer from './pages/SitTrainer';
import DualNBack from './pages/DualNBack';

import VisualGuides from './pages/VisualGuides';

export default function App() {
  return (
    <div className="flex min-h-screen bg-dark-950 text-titanium-100 selection:bg-titanium-200 selection:text-dark-950">
      {/* Dark Minimalist Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/visual-guides" element={<VisualGuides />} />
            <Route path="/encyclopedia" element={<Encyclopedia />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/lever-calculator" element={<LeverCalculator />} />
            <Route path="/sit-trainer" element={<SitTrainer />} />
            <Route path="/dual-n-back" element={<DualNBack />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
