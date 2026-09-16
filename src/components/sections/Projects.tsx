import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, Layers, Lightbulb, Target, Wrench, TrendingUp, BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';
import type { ProjectInfo } from '../../types';

function ProjectCard({ project, index }: { project: ProjectInfo; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const processSteps = ['Data Collection', 'Cleaning', 'EDA', 'Analysis', 'Visualization', 'Insights'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card overflow-hidden group"
    >
      {/* Header gradient bar */}
      <div className="h-1.5 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]" />

      <div className="p-6 md:p-8">
        {/* Category badge & title */}
        <div className="mb-4">
          <span className="inline-block text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--secondary)] bg-[var(--secondary)]/10 px-3 py-1 rounded-full mb-3">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{project.description}</p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Process flow */}
        <div className="flex flex-wrap items-center gap-1 mb-6 text-[0.7rem] text-[var(--text-dim)]">
          {processSteps.map((step, i) => (
            <span key={step} className="flex items-center gap-1">
              <span className="text-[var(--text-muted)]">{step}</span>
              {i < processSteps.length - 1 && (
                <ChevronRight size={10} className="text-[var(--primary)]/50" />
              )}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-[var(--primary)] hover:text-[var(--accent)] font-medium flex items-center gap-1 mb-4 transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'View details'}
          <motion.div animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronRight size={16} />
          </motion.div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-5 pt-2 border-t border-[var(--glass-border)]">
                {/* Business Problem */}
                <div className="flex gap-3 pt-4">
                  <Target size={18} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Business Problem</h4>
                    <p className="text-sm text-[var(--text-muted)]">{project.businessProblem}</p>
                  </div>
                </div>

                {/* Dataset */}
                <div className="flex gap-3">
                  <Layers size={18} className="text-[var(--secondary)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Dataset</h4>
                    <p className="text-sm text-[var(--text-muted)]">{project.dataset}</p>
                  </div>
                </div>

                {/* Techniques */}
                <div className="flex gap-3">
                  <Wrench size={18} className="text-[var(--primary)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Techniques</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techniques.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[0.7rem] rounded-md bg-white/[0.03] border border-white/[0.08] text-[var(--text-muted)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Insights */}
                <div className="flex gap-3">
                  <Lightbulb size={18} className="text-[var(--warning)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Insights</h4>
                    <ul className="space-y-1.5">
                      {project.keyInsights.map((insight, i) => (
                        <li key={i} className="text-sm text-[var(--text-muted)] flex gap-2">
                          <TrendingUp size={14} className="text-[var(--success)] mt-0.5 shrink-0" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex gap-3">
                  <Target size={18} className="text-[var(--success)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Outcome</h4>
                    <p className="text-sm text-[var(--text-muted)]">{project.outcome}</p>
                  </div>
                </div>

                {/* Learnings */}
                <div className="flex gap-3">
                  <BookOpen size={18} className="text-[var(--primary)] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">What I Learned</h4>
                    <ul className="space-y-1">
                      {project.learnings.map((l, i) => (
                        <li key={i} className="text-sm text-[var(--text-muted)]">• {l}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        {(project.github || project.liveDashboard || project.liveDemo) && (
          <div className="flex gap-3 mt-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-4">
                <ExternalLink size={14} /> GitHub
              </a>
            )}
            {project.liveDashboard && (
              <a href={project.liveDashboard} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4">
                <ExternalLink size={14} /> Live Dashboard
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Data Analytics Projects"
          subtitle="End-to-end analytics projects showcasing data-driven problem solving"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
