import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { TeamPreview } from '../components/TeamPreview';
import { Clients } from '../components/Clients';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <TeamPreview />
      <Clients />
    </>
  );
};
