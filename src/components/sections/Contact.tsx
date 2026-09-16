import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';

const contactInfo = [
  { icon: Mail, label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
  { icon: Phone, label: 'Phone', value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
  { icon: MapPin, label: 'Location', value: portfolioData.personal.location },
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend configured — show success state as a demo
    if (formData.name && formData.email && formData.message) {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 4000);
    } else {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Get in Touch"
          subtitle="Interested in working together? Let's connect!"
        />

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-[var(--text-dim)] mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-[var(--text)] hover:text-[var(--primary)] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--text)]">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Coding profiles */}
            {portfolioData.profiles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-4"
              >
                <p className="text-[0.65rem] uppercase tracking-widest text-[var(--text-dim)] mb-3">Coding Profiles</p>
                <div className="space-y-2">
                  {portfolioData.profiles.map((profile) => (
                    <div key={profile.platform} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">{profile.platform}</p>
                        <p className="text-[0.7rem] text-[var(--text-dim)]">{profile.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text-muted)] mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--glass-border)] text-white placeholder-[var(--text-dim)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--text-muted)] mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--glass-border)] text-white placeholder-[var(--text-dim)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--text-muted)] mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-[var(--glass-border)] text-white placeholder-[var(--text-dim)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-colors text-sm resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              {/* Submit button */}
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={16} />
                Send Message
              </button>

              {/* Status messages */}
              {formState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-[var(--success)] bg-[var(--success)]/10 border border-[var(--success)]/20 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 size={16} />
                  Thank you! Your message has been received.
                </motion.div>
              )}
              {formState === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                >
                  <AlertCircle size={16} />
                  Please fill in all fields.
                </motion.div>
              )}

              <p className="text-[0.65rem] text-[var(--text-dim)] text-center">
                This form is a demo. Connect a backend service (e.g., EmailJS, Formspree) to enable email delivery.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
