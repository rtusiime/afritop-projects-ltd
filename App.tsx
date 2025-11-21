import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="font-sans text-brand-blue antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
      </main>
      <Contact />
    </div>
  );
};

export default App;