import { motion } from 'framer-motion';
import { BarChart3, PieChart, Activity, TrendingUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const showcaseItems = [
  {
    title: 'Retail Sales Dashboard',
    tool: 'Power BI',
    type: 'Interactive Dashboard',
    description: 'KPIs for revenue, profit margin, and customer segmentation across regions and product categories.',
    metrics: ['Revenue Tracking', 'Profit Margins', 'Customer Segments', 'Regional Analysis'],
    icon: BarChart3,
    gradient: 'from-[#6366f1] to-[#8b5cf6]',
  },
  {
    title: 'Churn Analysis Visualizations',
    tool: 'Python · Matplotlib',
    type: 'Statistical Charts',
    description: 'Visualizations communicating key churn drivers to non-technical audiences — distributions, correlations, and feature analysis.',
    metrics: ['Churn Patterns', 'Feature Distributions', 'Correlation Analysis', 'Model Results'],
    icon: PieChart,
    gradient: 'from-[#06b6d4] to-[#6366f1]',
  },
];

export default function VisualizationShowcase() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Data Visualization Showcase"
          subtitle="Dashboards and charts that communicate insights effectively"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group"
            >
              {/* Mock dashboard preview */}
              <div className={`h-48 bg-gradient-to-br ${item.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                {/* Decorative chart elements */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                    {/* Area chart shape */}
                    <path
                      d="M0,180 Q50,120 100,140 T200,80 T300,110 T400,60 L400,200 L0,200 Z"
                      fill="rgba(255,255,255,0.1)"
                    />
                    <path
                      d="M0,180 Q50,120 100,140 T200,80 T300,110 T400,60"
                      fill="none"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                    />
                    {/* Bar hints */}
                    <rect x="30" y="130" width="20" height="50" rx="3" fill="rgba(255,255,255,0.15)" />
                    <rect x="70" y="100" width="20" height="80" rx="3" fill="rgba(255,255,255,0.2)" />
                    <rect x="110" y="115" width="20" height="65" rx="3" fill="rgba(255,255,255,0.15)" />
                    <rect x="150" y="85" width="20" height="95" rx="3" fill="rgba(255,255,255,0.25)" />
                  </svg>
                </div>

                <div className="relative text-center text-white">
                  <item.icon size={40} className="mx-auto mb-2 opacity-90" />
                  <p className="text-sm font-semibold opacity-80">{item.tool}</p>
                </div>

                {/* Floating mini-icons */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-4 opacity-40"
                >
                  <Activity size={20} className="text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-4 left-4 opacity-30"
                >
                  <TrendingUp size={18} className="text-white" />
                </motion.div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--secondary)] bg-[var(--secondary)]/10 px-2.5 py-1 rounded-full">
                  {item.type}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[0.65rem] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[var(--text-dim)]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
