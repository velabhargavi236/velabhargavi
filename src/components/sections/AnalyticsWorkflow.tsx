import { motion } from 'framer-motion';
import {
  Lightbulb, Database, Sparkles, Search, TrendingUp, BarChart3, MessageSquare, type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Lightbulb, Database, Sparkles, Search, TrendingUp, BarChart3, MessageSquare,
};

const colors = [
  'var(--primary)',
  'var(--secondary)',
  'var(--accent)',
  '#10b981',
  '#f59e0b',
  '#ec4899',
  '#6366f1',
];

export default function AnalyticsWorkflow() {
  const { workflow } = portfolioData;

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Analytics Workflow"
          subtitle="My systematic approach to solving data problems"
        />

        {/* Desktop: horizontal pipeline */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] opacity-30" />

            {workflow.map((step, i) => {
              const Icon = iconMap[step.icon] || Lightbulb;
              const color = colors[i % colors.length];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center w-[130px] relative z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 cursor-default"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon size={24} style={{ color }} />
                  </motion.div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest mb-1" style={{ color }}>
                    Step {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-[0.7rem] text-[var(--text-dim)] mb-2">{step.description}</p>
                  <div className="space-y-0.5">
                    {step.details.map((d) => (
                      <p key={d} className="text-[0.6rem] text-[var(--text-dim)]">{d}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-6">
          {workflow.map((step, i) => {
            const Icon = iconMap[step.icon] || Lightbulb;
            const color = colors[i % colors.length];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="w-0.5 h-8 mt-2 bg-gradient-to-b from-[var(--primary)]/30 to-transparent" />
                  )}
                </div>
                <div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest" style={{ color }}>
                    Step {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-[var(--text-dim)]">{step.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {step.details.map((d) => (
                      <span key={d} className="text-[0.65rem] px-2 py-0.5 rounded bg-white/[0.03] text-[var(--text-dim)] border border-white/[0.05]">
                        {d}
                      </span>
                    ))}
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
