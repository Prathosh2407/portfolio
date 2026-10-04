import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-accent-cyan/30 selection:text-accent-cyan">
      {/* Dynamic Ambient Background & Grid */}
      <BackgroundEffects />

      {/* Floating Navigation Pill */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
