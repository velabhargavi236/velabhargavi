import { Heart, BarChart3 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-primary)]/80 backdrop-blur-sm">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
              <BarChart3 size={20} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white">{personal.name}</p>
              <p className="text-sm text-[var(--text-muted)]">{personal.title}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personal.email}`}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
            >
              Email
            </a>
            <a
              href="#projects"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-[var(--text-dim)]">
            <span>© {year} {personal.name}. Built with</span>
            <Heart size={14} className="text-red-400 fill-red-400 mx-1" />
            <span>React, TypeScript & a passion for data.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
