import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

const providerColors: Record<string, string> = {
  google: '#4285F4',
  microsoft: '#00A4EF',
  sql: '#06b6d4',
};

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials validating my data analytics expertise"
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => {
            const color = providerColors[cert.icon] || 'var(--primary)';
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 text-center group"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    boxShadow: `0 0 0 transparent`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 transparent`;
                  }}
                >
                  <Award size={24} style={{ color }} />
                </div>

                {/* Status badge */}
                <div className="mb-3">
                  {cert.status === 'Completed' ? (
                    <span className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-[var(--success)] bg-[var(--success)]/10 px-2.5 py-1 rounded-full">
                      <CheckCircle2 size={12} /> Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[0.65rem] font-semibold text-[var(--warning)] bg-[var(--warning)]/10 px-2.5 py-1 rounded-full">
                      <Clock size={12} /> In Progress
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[var(--primary)] transition-colors">
                  {cert.name}
                </h3>

                {/* Provider */}
                <p className="text-xs text-[var(--text-dim)] mb-4">{cert.provider}</p>

                {/* Verify placeholder */}
                <button
                  className="inline-flex items-center gap-1 text-[0.7rem] text-[var(--text-dim)] hover:text-[var(--primary)] transition-colors"
                  aria-label={`Verify ${cert.name} certification`}
                >
                  <ExternalLink size={12} /> Verify
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
