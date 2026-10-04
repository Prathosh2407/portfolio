import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Download, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-card border-white/10 shadow-2xl py-2.5 px-5 bg-dark-900/85 backdrop-blur-xl'
            : 'bg-dark-900/40 backdrop-blur-md border border-white/5 py-3.5 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan via-accent-violet to-fuchsia-500 p-[1px] shadow-sm shadow-accent-cyan/20">
              <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center group-hover:bg-dark-900 transition-colors">
                <Terminal className="w-4 h-4 text-accent-cyan transition-transform group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-0.5">
                SOFTWARE ENGINEER and creative_telemetry.sys with engineer_telemetry.sys.
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-dark-950/60 p-1 rounded-full border border-white/5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20 border border-accent-cyan/40 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available</span>
            </div>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
              download={PERSONAL_INFO.resumeFileName || "resume.pdf"}
              className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-accent-cyan/50 text-xs font-medium text-slate-200 hover:text-white transition-all duration-200 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-accent-cyan transition-transform group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden pt-4 pb-2 border-t border-white/10 mt-3 flex flex-col gap-2"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
                  download={PERSONAL_INFO.resumeFileName || "resume.pdf"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-dark-950 font-semibold text-xs transition-opacity hover:opacity-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
