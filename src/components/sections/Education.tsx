import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <div className="max-w-2xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-8 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              {i < education.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[var(--primary)]/20 border-2 border-[var(--primary)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              </div>

              {/* Content */}
              <div className="glass-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center">
                      <GraduationCap size={20} className="text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{edu.degree}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-[var(--text-dim)]">
                      <Calendar size={14} />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-[var(--success)] font-semibold">
                      <Award size={14} />
                      {edu.gradeLabel}: {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
