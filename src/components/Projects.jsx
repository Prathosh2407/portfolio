import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers, Eye, CheckCircle2, X, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterTag, setFilterTag] = useState('ALL');

  // Extract all unique tags
  const allTags = ['ALL', ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))].slice(0, 7);

  const filteredProjects = filterTag === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(filterTag));

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected <span className="text-gradient">Projects</span> & Experiments
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
              A curated selection of high-framerate 3D experiences, decentralized finance interfaces, and node-based creative tools.
            </p>
          </div>

          {/* Quick Filter Pill Bar */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-dark-900/90 border border-white/5 backdrop-blur-md">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 ${
                  filterTag === tag
                    ? 'bg-accent-cyan text-dark-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between rounded-2xl glass-card border border-white/10 hover:border-accent-cyan/40 bg-gradient-to-b from-dark-900/90 to-dark-950/90 overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_12px_36px_rgba(0,240,255,0.12)]"
            >
              {/* Card Image Thumbnail with Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-dark-850">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-dark-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-slate-300">
                    {project.category}
                  </span>
                </div>

                {/* Quick Interactive Preview Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white flex items-center gap-1.5 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                >
                  <Eye className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Inspect</span>
                </button>
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Performance metric highlight */}
                  <div className="py-2 px-3 rounded-lg bg-dark-850/80 border border-white/5 text-[11px] font-mono text-emerald-400 mb-4 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-800/80 text-slate-300 border border-white/5 group-hover:border-accent-cyan/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links: Live Demo & GitHub */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:text-white transition-colors"
                    >
                      <span>Live Experience</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Modal for Deep Project Inspection */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-dark-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-accent-cyan/15 text-accent-cyan font-mono text-xs font-medium border border-accent-cyan/30">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {selectedProject.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>

                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Engineered With:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800 text-slate-200 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet font-semibold text-dark-950 text-xs hover:opacity-95 transition-opacity"
                  >
                    <span>Launch Live Interactive Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
