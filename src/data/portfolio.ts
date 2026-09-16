import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Vela Bhargavi',
    title: 'Data Analyst',
    subtitle: 'Transforming Raw Data into Actionable Insights',
    email: 'velabhargavi236@gmail.com',
    phone: '+91-9492035503',
    location: 'Chennai, Tamil Nadu, India',
    availability: 'Immediate',
    typingTitles: [
      'Data Analyst',
      'Data Visualization Enthusiast',
      'SQL & Python Developer',
      'Business Intelligence Analyst',
      'Analytics Problem Solver',
    ],
  },

  about: `I'm a detail-oriented and analytical fresher with a strong foundation in statistics, SQL, and data visualization. My journey into data analytics started with a curiosity about how numbers tell stories — and it's grown into a genuine passion for turning raw data into actionable business insights.

With hands-on experience in Python (Pandas, NumPy), SQL, Excel, Power BI, and Tableau, I've built interactive dashboards, performed exploratory data analysis, and developed predictive models through academic and self-driven projects. My analytical toolkit spans data cleaning, statistical analysis, A/B testing concepts, and KPI reporting.

I thrive on solving problems with data. Whether it's identifying customer churn patterns using logistic regression or building retail sales dashboards that reveal inventory optimization opportunities, I focus on delivering insights that drive real business decisions.

Currently seeking a Data Analyst role where I can apply my technical skills and analytical mindset to help organizations make data-driven decisions.`,

  snapshot: [
    {
      label: 'Analytics Projects',
      value: 2,
      suffix: '+',
      description: 'End-to-end data projects',
      icon: 'BarChart3',
    },
    {
      label: 'Certifications',
      value: 3,
      description: 'Professional certificates',
      icon: 'Award',
    },
    {
      label: 'Technologies',
      value: 12,
      suffix: '+',
      description: 'Tools & frameworks',
      icon: 'Code2',
    },
    {
      label: 'Academic CGPA',
      value: 8.6,
      description: 'B Pharmacy',
      icon: 'GraduationCap',
    },
    {
      label: 'Problems Solved',
      value: 200,
      suffix: '+',
      description: 'HackerRank & LeetCode',
      icon: 'Terminal',
    },
    {
      label: 'Dashboards Built',
      value: 1,
      suffix: '+',
      description: 'Interactive BI dashboards',
      icon: 'LayoutDashboard',
    },
  ],

  skills: [
    {
      category: 'Programming',
      icon: 'Code2',
      skills: [
        { name: 'Python', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
      ],
    },
    {
      category: 'Data Analysis',
      icon: 'TrendingUp',
      skills: [
        { name: 'Pandas', level: 'Intermediate' },
        { name: 'NumPy', level: 'Intermediate' },
        { name: 'Data Cleaning', level: 'Intermediate' },
        { name: 'Exploratory Data Analysis', level: 'Intermediate' },
        { name: 'A/B Testing', level: 'Familiar' },
        { name: 'Data Modelling', level: 'Familiar' },
      ],
    },
    {
      category: 'SQL & Databases',
      icon: 'Database',
      skills: [
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Familiar' },
        { name: 'MS SQL Server', level: 'Familiar' },
      ],
    },
    {
      category: 'Data Visualization',
      icon: 'BarChart3',
      skills: [
        { name: 'Power BI', level: 'Intermediate' },
        { name: 'Tableau', level: 'Familiar' },
        { name: 'Matplotlib', level: 'Intermediate' },
        { name: 'Seaborn', level: 'Familiar' },
      ],
    },
    {
      category: 'Statistics & Concepts',
      icon: 'Brain',
      skills: [
        { name: 'Statistics & Probability', level: 'Intermediate' },
        { name: 'KPI Reporting', level: 'Familiar' },
        { name: 'Logistic Regression', level: 'Familiar' },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: 'Wrench',
      skills: [
        { name: 'MS Excel (Advanced)', level: 'Advanced' },
        { name: 'Google Sheets', level: 'Intermediate' },
        { name: 'Jupyter Notebook', level: 'Intermediate' },
        { name: 'Git / GitHub', level: 'Familiar' },
        { name: 'Scikit-learn', level: 'Familiar' },
      ],
    },
  ],

  projects: [
    {
      id: 'retail-sales-dashboard',
      title: 'Retail Sales Performance Dashboard',
      category: 'Business Intelligence',
      description:
        'Analyzed 50,000+ retail transaction records to uncover sales trends across regions and product categories, and built an interactive Power BI dashboard for business stakeholders.',
      businessProblem:
        'Retail businesses need real-time visibility into sales performance across regions and product categories to optimize inventory and improve revenue forecasting.',
      dataset: '50,000+ retail transaction records with sales, regions, product categories, and customer data.',
      tools: ['Power BI', 'SQL', 'Excel'],
      techniques: [
        'SQL Joins & Subqueries',
        'Window Functions',
        'Data Aggregation',
        'KPI Dashboard Design',
        'Customer Segmentation',
      ],
      keyInsights: [
        'Identified sales trends across multiple regions and product categories',
        'Built KPIs for revenue, profit margin, and customer segmentation',
        'Wrote optimized SQL queries using joins, subqueries, and window functions',
        'Insights could support a 12% improvement in inventory planning accuracy',
      ],
      outcome:
        'Presented insights that could support a 12% improvement in inventory planning accuracy through data-driven regional and category-level analysis.',
      learnings: [
        'Advanced SQL query optimization',
        'Interactive dashboard design in Power BI',
        'Translating data insights into business recommendations',
      ],
    },
    {
      id: 'customer-churn-analysis',
      title: 'Customer Churn Analysis',
      category: 'Data Science / Analytics',
      description:
        'Performed exploratory data analysis on a telecom customer dataset to identify churn patterns and built a logistic regression baseline model for churn prediction.',
      businessProblem:
        'Telecom companies face significant revenue loss from customer churn. Identifying at-risk customers enables targeted retention strategies.',
      dataset: 'Telecom customer dataset with demographic, service, and usage features.',
      tools: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      techniques: [
        'Exploratory Data Analysis',
        'Data Cleaning & Preprocessing',
        'Missing Value Handling',
        'Outlier Detection',
        'Categorical Encoding',
        'Logistic Regression',
      ],
      keyInsights: [
        'Identified key churn drivers through exploratory data analysis',
        'Cleaned and preprocessed data handling missing values, outliers, and categorical encoding',
        'Communicated key churn drivers to a non-technical audience through visualizations',
        'Achieved 82% classification accuracy with a logistic regression baseline model',
      ],
      outcome:
        'Built a logistic regression baseline model achieving 82% classification accuracy, enabling identification of key churn risk factors.',
      learnings: [
        'End-to-end data science workflow',
        'Communicating analytical results to non-technical stakeholders',
        'Feature engineering and model evaluation',
      ],
    },
  ],

  education: [
    {
      degree: 'B Pharmacy',
      institution: 'Narayana Pharmacy College',
      duration: '2022 – 2026',
      grade: '8.6 / 10',
      gradeLabel: 'CGPA',
    },
    {
      degree: 'Higher Secondary Certificate (12th Grade)',
      institution: 'Vikas Junior College',
      duration: '2020 – 2022',
      grade: '88%',
      gradeLabel: 'Percentage',
    },
  ],

  certifications: [
    {
      name: 'Google Data Analytics Professional Certificate',
      provider: 'Coursera (Google)',
      status: 'Completed',
      icon: 'google',
    },
    {
      name: 'Microsoft Power BI Data Analyst Associate (PL-300)',
      provider: 'Microsoft',
      status: 'In Progress',
      icon: 'microsoft',
    },
    {
      name: 'SQL for Data Science / HackerRank SQL (5-Star)',
      provider: 'Coursera / HackerRank',
      status: 'Completed',
      icon: 'sql',
    },
  ],

  experience: [
    {
      role: 'Data Analyst Trainee',
      organization: 'Login 360 Academy',
      location: 'Chennai',
      duration: 'May 2026 – Oct 2026',
      responsibilities: [
        'Analyzed and cleaned datasets using SQL, Python, Pandas, and NumPy',
        'Performed Exploratory Data Analysis (EDA) to identify trends and patterns',
        'Wrote SQL queries to extract, filter, join, and aggregate data',
        'Built data analysis projects using real-world datasets',
      ],
      technologies: ['SQL', 'Python', 'Pandas', 'NumPy'],
    },
  ],

  achievements: [
    {
      title: 'Data Analytics Hackathon',
      description: 'Winner/Finalist at Inter-College Data Analytics Hackathon',
      icon: 'Trophy',
    },
    {
      title: '200+ Problems Solved',
      description: 'Completed 200+ problems on HackerRank & LeetCode in SQL and Python',
      icon: 'Code2',
    },
    {
      title: 'Analytics Club Member',
      description: 'Active member of the college Analytics/Coding Club',
      icon: 'Users',
    },
  ],

  profiles: [
    {
      platform: 'HackerRank',
      description: 'SQL 5-Star rated · 200+ problems solved',
      icon: 'hackerrank',
    },
    {
      platform: 'LeetCode',
      description: 'SQL & Python problem solving',
      icon: 'leetcode',
    },
  ],

  workflow: [
    {
      step: 1,
      title: 'Understand',
      description: 'Business Problem',
      details: ['Define objectives', 'Identify stakeholders', 'Clarify requirements'],
      icon: 'Lightbulb',
    },
    {
      step: 2,
      title: 'Collect',
      description: 'Data Sources',
      details: ['SQL databases', 'CSV / Excel files', 'APIs & data exports'],
      icon: 'Database',
    },
    {
      step: 3,
      title: 'Clean',
      description: 'Data Preparation',
      details: ['Missing values', 'Duplicates & outliers', 'Data type formatting'],
      icon: 'Sparkles',
    },
    {
      step: 4,
      title: 'Explore',
      description: 'EDA & Statistics',
      details: ['Distributions', 'Correlations', 'Patterns & trends'],
      icon: 'Search',
    },
    {
      step: 5,
      title: 'Analyze',
      description: 'Deep Analysis',
      details: ['SQL queries', 'Python / Pandas', 'Statistical methods'],
      icon: 'TrendingUp',
    },
    {
      step: 6,
      title: 'Visualize',
      description: 'Dashboards & Charts',
      details: ['Power BI', 'Tableau', 'Matplotlib / Seaborn'],
      icon: 'BarChart3',
    },
    {
      step: 7,
      title: 'Communicate',
      description: 'Insights & Impact',
      details: ['Key findings', 'Recommendations', 'Business decisions'],
      icon: 'MessageSquare',
    },
  ],
};
