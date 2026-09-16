import { motion } from 'framer-motion';
import { Download, FileText, ArrowRight } from 'lucide-react';

export default function ResumeCTA() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
              <FileText size={28} className="text-white" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Want to know more about my work?
            </h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">
              Download my resume for a detailed overview of my skills, projects, certifications, and experience in data analytics.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="/Vela_Bhargavi_Resume.pdf" download className="btn-primary">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline group">
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
