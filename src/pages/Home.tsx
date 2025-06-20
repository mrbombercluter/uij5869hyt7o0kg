import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ConfigShowcase from '../components/ConfigShowcase';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ConfigShowcase />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;