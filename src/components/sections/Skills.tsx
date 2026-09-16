import { motion } from 'framer-motion';
import {
  Code2, TrendingUp, Database, BarChart3, Brain, Wrench, type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';
import type { SkillCategory, SkillItem } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  Code2, TrendingUp, Database, BarChart3, Brain, Wrench,
};

function getSkillLevelClass(level: SkillItem['level']) {
  const map: Record<string, string> = {
    Advanced: 'skill-level-advanced',
    Intermediate: 'skill-level-intermediate',
    Familiar: 'skill-level-familiar',
    'Working Knowledge': 'skill-level-working-knowledge',
    Beginner: 'skill-level-beginner',
  };
  return map[level] || 'skill-level-familiar';
}

function SkillCard({ skill, delay }: { skill: SkillItem; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[var(--primary)]/30 hover:bg-white/[0.04] transition-all duration-200"
    >
      <span className="text-sm font-medium text-[var(--text)]">{skill.name}</span>
      <span className={`text-[0.65rem] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${getSkillLevelClass(skill.level)}`}>
        {skill.level}
      </span>
    </motion.div>
  );
}

function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = iconMap[category.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)]/15 to-[var(--accent)]/15 border border-[var(--primary)]/20 flex items-center justify-center">
          <Icon size={20} className="text-[var(--primary)]" />
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm">{category.category}</h3>
          <p className="text-[0.7rem] text-[var(--text-dim)]">{category.skills.length} skills</p>
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-2">
        {category.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={index * 0.1 + i * 0.05} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with across the data analytics stack"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, i) => (
            <CategoryCard key={category.category} category={category} index={i} />
          ))}
        </div>

        {/* Proficiency legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-dim)]"
        >
          <span>Proficiency:</span>
          {(['Advanced', 'Intermediate', 'Familiar'] as const).map((level) => (
            <span key={level} className={`px-2.5 py-1 rounded-full ${getSkillLevelClass(level)}`}>
              {level}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
