import { motion } from 'framer-motion';
import {
  BarChart3, Award, Code2, GraduationCap, Terminal, LayoutDashboard,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';
import { portfolioData } from '../../data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  BarChart3, Award, Code2, GraduationCap, Terminal, LayoutDashboard,
};

export default function AnalyticsSnapshot() {
  const { snapshot } = portfolioData;

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Analytics Snapshot"
          subtitle="A quick overview of my data analytics journey"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {snapshot.map((metric, i) => {
            const Icon = iconMap[metric.icon] || BarChart3;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card p-5 text-center group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--primary)]/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[var(--primary-glow)] transition-shadow duration-300">
                  <Icon size={22} className="text-[var(--primary)]" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-xs font-semibold text-[var(--text)] mb-0.5">{metric.label}</p>
                <p className="text-[0.7rem] text-[var(--text-dim)]">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
