import { motion } from 'framer-motion';
import { Trophy, Code2, Users, type LucideIcon } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Trophy, Code2, Users,
};

const achievementColors = ['var(--warning)', 'var(--primary)', 'var(--secondary)'];

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="Achievements" subtitle="Milestones along my data analytics journey" />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Trophy;
            const color = achievementColors[i % achievementColors.length];
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card p-6 text-center group cursor-default"
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-shadow duration-300"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {ach.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">{ach.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
