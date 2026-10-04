import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles, Building2, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  const [expandedId, setExpandedId] = useState('lead-creative-2024');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            7+ years spearheading creative web initiatives, architecting high-scale frontend systems, and directing digital craftsmanship.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10">
          
          {/* Animated Glowing Spine Accent */}
          <div className="absolute top-0 left-[-1px] w-[2px] h-36 bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent" />

          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.period.includes('PRESENT');

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Milestone Node on Spine */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isCurrent
                      ? 'bg-accent-cyan border-white shadow-[0_0_15px_#00F0FF]'
                      : 'bg-dark-950 border-slate-500 group-hover:border-accent-cyan group-hover:bg-accent-cyan/20'
                  }`}
                >
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-dark-950 animate-ping" />
                  )}
                </div>

                {/* Timeline Card */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className={`p-6 rounded-2xl glass-card border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? 'border-accent-cyan/40 bg-dark-900/90 shadow-[0_8px_30px_rgba(0,240,255,0.1)]'
                      : 'border-white/10 bg-dark-900/60 hover:border-white/20 hover:bg-dark-900/80'
                  }`}
                >
                  {/* Top Bar: Company & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {exp.role}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/25 font-mono">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Metadata Row: Location & Type */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="text-emerald-400 font-medium">{exp.type}</span>
                  </div>

                  {/* Role Brief Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Collapsible Key Achievements */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-3 border-t border-white/[0.08] space-y-3"
                      >
                        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          Key Deliverables & Impact:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                              <CheckCircle className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Chips */}
                        <div className="pt-2">
                          <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                            Technologies Deployed:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-800 text-slate-300 border border-white/5"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Indicator */}
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/[0.04]">
                    <span>{isExpanded ? 'Click to collapse' : 'Click to inspect achievements'}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-90 text-accent-cyan' : ''
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
