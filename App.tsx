import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Home } from './pages/Home';
import { TeamPage } from './pages/TeamPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans text-brand-blue antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
        <Contact />
      </div>
    </Router>
  );
};

export default App;
