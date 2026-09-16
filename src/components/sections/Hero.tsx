import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { portfolioData } from '../../data/portfolio';
import ParticleBackground from '../ui/ParticleBackground';

export default function Hero() {
  const { personal } = portfolioData;
  const typedText = useTypingEffect(personal.typingTitles, 80, 40, 2200);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="gradient-mesh" />
      <div className="absolute inset-0 bg-grid" />
      <ParticleBackground />

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-20">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass)] border border-[var(--glass-border)] mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-[var(--text-muted)]">
            Available for opportunities · {personal.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--text-muted)] mb-4 h-10"
        >
          <span>{typedText}</span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg text-[var(--text-dim)] max-w-xl mx-auto mb-4"
        >
          {personal.subtitle}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-[var(--text-dim)] mb-10"
        >
          <MapPin size={16} />
          <span className="text-sm">{personal.location}</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary">
            <Mail size={18} />
            Get in Touch
          </a>
          <a href="/Vela_Bhargavi_Resume.pdf" download className="btn-outline">
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Floating decorative icons */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] hidden lg:block opacity-20"
        >
          <Sparkles size={32} className="text-[var(--primary)]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 right-[12%] hidden lg:block opacity-15"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-[var(--secondary)]">
            <rect x="2" y="20" width="8" height="18" rx="2" fill="currentColor" opacity="0.5" />
            <rect x="14" y="10" width="8" height="28" rx="2" fill="currentColor" opacity="0.7" />
            <rect x="26" y="5" width="8" height="33" rx="2" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[var(--glass-border)] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
