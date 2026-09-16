import { motion } from 'framer-motion';
import { Target, TrendingUp, Lightbulb, Code2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

const highlights = [
  { icon: Target, label: 'Data-Driven Decisions', color: 'var(--primary)' },
  { icon: TrendingUp, label: 'Analytical Thinking', color: 'var(--secondary)' },
  { icon: Lightbulb, label: 'Problem Solving', color: 'var(--accent)' },
  { icon: Code2, label: 'Technical Skills', color: 'var(--success)' },
];

export default function About() {
  const paragraphs = portfolioData.about.split('\n\n');

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="About Me" subtitle="Turning raw data into meaningful stories" />

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-5"
          >
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Highlights sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Core Strengths
            </h3>
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-4 flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${h.color}15`, border: `1px solid ${h.color}30` }}
                >
                  <h.icon size={20} style={{ color: h.color }} />
                </div>
                <span className="text-sm font-medium text-[var(--text)]">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
