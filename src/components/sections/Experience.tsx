import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  if (experience.length === 0) return null;

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Internship Experience"
          subtitle="Hands-on training building real-world data analysis skills"
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center shrink-0">
                    <Briefcase size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-[var(--text-muted)]">{exp.organization}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5 text-sm text-[var(--text-dim)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.08 }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle2 size={16} className="text-[var(--success)] mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--text-muted)]">{resp}</span>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
