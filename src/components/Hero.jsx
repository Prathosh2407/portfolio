import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, CheckCircle, Sparkles, Terminal, Code2, Cpu, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const [downloading, setDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState('stack');

  const triggerDownload = (e) => {
    setDownloading(true);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00F0FF', '#8B5CF6', '#10B981', '#ffffff']
    });

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)] group cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald shadow-[0_0_8px_#10B981]" />
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300">
                {PERSONAL_INFO.availabilityBadge}
              </span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors">
                Available for Q4 / 2027 projects
              </span>
            </motion.div>

            {/* Main Animated Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.12]">
                Architecting <br />
                <span className="text-gradient">Fluid & Immersive</span> <br />
                Digital Realities.
              </h1>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
            >
              Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. {PERSONAL_INFO.bio}
            </motion.p>

            {/* Action Buttons: "View Work" CTA + "Download Resume" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* View Work CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-violet to-fuchsia-500 font-semibold text-dark-950 text-sm shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>

              {/* Download Resume Button */}
              <a
                href="/Alex_Rivera_Resume.pdf"
                download="Alex_Rivera_Resume.pdf"
                onClick={triggerDownload}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl glass-card hover:bg-white/[0.08] border border-white/10 hover:border-accent-cyan/40 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {downloading ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-accent-emerald animate-bounce" />
                    <span className="text-emerald-300">Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-accent-cyan transition-transform group-hover:-translate-y-0.5" />
                    <span>Download CV</span>
                  </>
                )}
              </a>
            </motion.div>

            {/* Live Performance Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/[0.08] w-full"
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white flex items-baseline gap-1">
                    {stat.value}
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  </span>
                  <span className="text-xs text-slate-400 font-sans mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Creative Developer HUD Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl p-5 bg-gradient-to-b from-dark-900/90 to-dark-950/95">
              
              {/* Header bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    creative-telemetry.sys
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-dark-800 border border-white/5 text-[10px] font-mono text-accent-cyan">
                  <Cpu className="w-3 h-3 animate-spin-slow" />
                  <span>LIVE HUD</span>
                </div>
              </div>

              {/* Code / Telemetry Tabs */}
              <div className="flex gap-2 mb-3.5">
                {[
                  { id: 'stack', label: 'Tech Pipeline' },
                  { id: 'diagnostics', label: 'Vitals (60 FPS)' },
                  { id: 'manifesto', label: 'Manifesto' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                      activeTab === tab.id
                        ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="rounded-xl bg-dark-950/90 border border-white/[0.06] p-4 font-mono text-xs text-slate-300 leading-relaxed min-h-[220px]">
                {activeTab === 'stack' && (
                  <div className="space-y-2">
                    <div className="text-slate-500">// Core Creative Engine</div>
                    <div className="flex justify-between items-center text-slate-200">
                      <span className="text-accent-cyan">Renderer:</span>
                      <span>React 18 + Three.js (WebGL 2.0)</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-200">
                      <span className="text-accent-violet">Motion:</span>
                      <span>Framer Motion Spring Orchestrations</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-200">
                      <span className="text-emerald-400">Styling:</span>
                      <span>Tailwind CSS Modern Design Tokens</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-200">
                      <span className="text-amber-400">Build Tool:</span>
                      <span>Vite 5 (HMR 12ms average)</span>
                    </div>
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Status:</span>
                      <span className="text-emerald-400">● 100% Type-Safe & Responsive</span>
                    </div>
                  </div>
                )}

                {activeTab === 'diagnostics' && (
                  <div className="space-y-3">
                    <div className="text-slate-500">// Real-time Profiling Metrics</div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span>Framerate Stability:</span>
                        <span className="text-emerald-400 font-bold">59.9 ~ 60.1 FPS</span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[99%]" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span>Lighthouse Score:</span>
                        <span className="text-accent-cyan font-bold">99 / 100</span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-accent-cyan h-full w-[99%]" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span>Interaction Latency:</span>
                        <span className="text-accent-violet font-bold">&lt; 16ms (Instant)</span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-accent-violet h-full w-[95%]" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'manifesto' && (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-500">// Design & Engineering Philosophy</div>
                    <p className="text-[12px] text-slate-300 italic">
                      "I believe code is an artistic medium. A digital experience should feel tactile, fast as thought, and visually magnetic without sacrificing accessibility or web performance."
                    </p>
                    <div className="text-right text-[11px] text-accent-cyan font-semibold">
                      — Alex Rivera
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom live ticker */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
                  Spatial Canvas Sync Active
                </span>
                <span>Ready for Collaboration</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
