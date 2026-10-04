import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Layers, Sparkles, Cpu, Wrench, ShieldCheck } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const activeCategory = SKILL_CATEGORIES[selectedCategoryIndex];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 bg-dark-950/40">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Specialized <span className="text-gradient">Skill Stack</span> & Capabilities
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Engineered across 7+ years of building production-grade web applications, interactive 3D simulations, and design systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-md max-w-full">
            {SKILL_CATEGORIES.map((category, index) => {
              const isSelected = selectedCategoryIndex === index;
              return (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategoryIndex(index)}
                  className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillCategory"
                      className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-violet/30 border border-accent-cyan/40 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {index === 0 && <Code className="w-3.5 h-3.5 text-accent-cyan" />}
                    {index === 1 && <Terminal className="w-3.5 h-3.5 text-accent-violet" />}
                    {index === 2 && <Wrench className="w-3.5 h-3.5 text-emerald-400" />}
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="mb-8 text-center">
          <p className="text-xs sm:text-sm font-mono text-slate-400">
            {activeCategory.description}
          </p>
        </div>

        {/* Categorized Skill Badges Grid */}
        <motion.div
          key={activeCategory.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {activeCategory.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -3 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`group relative p-4 rounded-xl glass-card border border-white/10 hover:border-accent-cyan/50 transition-all duration-300 cursor-pointer overflow-hidden ${
                skill.highlight ? 'bg-dark-900/90' : 'bg-dark-900/60'
              }`}
            >
              {/* Highlight specular sheen */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-cyan/10 rounded-full blur-2xl group-hover:bg-accent-cyan/25 transition-all" />

              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="font-semibold text-sm text-slate-100 group-hover:text-white flex items-center gap-1.5">
                  {skill.name}
                  {skill.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                  )}
                </span>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-accent-cyan transition-colors">
                  {skill.experience}
                </span>
              </div>

              {/* Animated Progress Meter */}
              <div className="relative z-10">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1.5">
                  <span>Proficiency</span>
                  <span className="text-white font-bold">{skill.level}</span>
                </div>
                <div className="w-full bg-dark-950/80 rounded-full h-1.5 overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${activeCategory.color}`}
                  />
                </div>
              </div>

              {/* Hover Badge Highlight */}
              <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                <span>Production Validated</span>
                <span className="text-emerald-400 font-medium">Verified ✓</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Summary Badge */}
        <div className="mt-12 p-4 rounded-xl glass-card border border-white/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 flex items-center justify-center border border-accent-cyan/30 text-accent-cyan shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-wider">
                Full-Lifecycle Architecture
              </h4>
              <p className="text-xs text-slate-400">
                From wireframe to GLSL shaders, micro-animations, and production serverless deployment.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-xs text-accent-cyan font-bold px-3 py-1.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/25">
            20+ Key Technologies
          </div>
        </div>

      </div>
    </section>
  );
}
