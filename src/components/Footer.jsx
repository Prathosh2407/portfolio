import React from 'react';
import { ArrowUp, Terminal, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-white/[0.08] bg-dark-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-white text-sm">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <span className="hidden sm:inline text-slate-600 font-mono">•</span>
          <p className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} All rights reserved. Crafted with React, Tailwind & Framer Motion.
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card hover:bg-white/10 border border-white/10 hover:border-accent-cyan/40 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm"
          aria-label="Scroll to top"
        >
          <span>Return to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-accent-cyan transition-transform group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
}
