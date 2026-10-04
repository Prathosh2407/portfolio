import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send, Sparkles, Github, Linkedin, Twitter, MessageSquare, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WebGL / Interactive Experience',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.85 },
      colors: ['#00F0FF', '#10B981', '#ffffff']
    });

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00F0FF', '#8B5CF6', '#10B981']
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Initiate a <span className="text-gradient">Collaboration</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Have a project in mind, want to build an award-winning digital experience, or discuss senior engineering leadership? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info, Copy-to-Clipboard Card, Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Copy-to-Clipboard Email Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 bg-gradient-to-b from-dark-900/90 to-dark-950/90 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-cyan" />
                  DIRECT INBOX
                </span>
                <span className="text-[11px] font-mono text-emerald-400">
                  Avg. reply: &lt; 24h
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-3">
                Click below to copy my primary email to your clipboard:
              </p>

              {/* Interactive Copy Button Box */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-dark-950 border border-white/10 hover:border-accent-cyan/50 text-left transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="text-xs sm:text-sm font-mono text-white group-hover:text-accent-cyan transition-colors truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300 group-hover:text-white shrink-0 ml-2">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-accent-cyan transition-colors" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </button>

              {/* Toast Feedback */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Email address copied to clipboard!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Links Grid */}
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Digital Footprint:
              </h4>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/5 hover:border-accent-cyan/30 text-slate-300 hover:text-white transition-all group"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-accent-cyan transition-colors" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/5 hover:border-accent-cyan/30 text-slate-300 hover:text-white transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-accent-cyan transition-colors" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/5 hover:border-accent-cyan/30 text-slate-300 hover:text-white transition-all group"
                >
                  <Twitter className="w-5 h-5 text-slate-400 group-hover:text-accent-cyan transition-colors" />
                  <span className="text-xs font-medium">X / Twitter</span>
                </a>
              </div>
            </div>

            {/* Location & Timezone card */}
            <div className="p-4 rounded-xl glass-card border border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>Timezone: UTC-7 (PST)</span>
              <span className="text-emerald-400">● Accepting Remote Global</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 bg-gradient-to-b from-dark-900/90 to-dark-950/95 shadow-2xl">
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out, <span className="text-accent-cyan font-medium">{formData.name}</span>. I've received your note and will review it shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'WebGL / Interactive Experience', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Transmission Protocol
                    </span>
                    <span className="text-[11px] font-mono text-accent-cyan">
                      Encrypted SSL
                    </span>
                  </div>

                  {/* Name and Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan text-sm text-white placeholder-slate-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan text-sm text-white placeholder-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Scope of Interest
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan text-sm text-white outline-none transition-all"
                    >
                      <option value="WebGL / Interactive Experience">Interactive Experience / WebGL</option>
                      <option value="Fullstack Product Architecture">Fullstack Product Architecture</option>
                      <option value="Design System & Framer Motion">Design System & Framer Motion</option>
                      <option value="Advisory / Lead Contract">Advisory / Lead Contract</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Brief Message or Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, timelines, or requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-violet to-fuchsia-500 font-semibold text-dark-950 text-sm shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.45)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
