export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  typingTitles: string[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Familiar' | 'Working Knowledge';
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectInfo {
  id: string;
  title: string;
  category: string;
  description: string;
  businessProblem: string;
  dataset: string;
  tools: string[];
  techniques: string[];
  keyInsights: string[];
  outcome: string;
  learnings: string[];
  github?: string;
  liveDashboard?: string;
  liveDemo?: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  gradeLabel: string;
}

export interface CertificationInfo {
  name: string;
  provider: string;
  status: 'Completed' | 'In Progress';
  icon: string;
}

export interface ExperienceInfo {
  role: string;
  organization: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export interface AchievementInfo {
  title: string;
  description: string;
  icon: string;
}

export interface ProfileInfo {
  platform: string;
  description: string;
  url?: string;
  icon: string;
}

export interface SnapshotMetric {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  icon: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: string;
  snapshot: SnapshotMetric[];
  skills: SkillCategory[];
  projects: ProjectInfo[];
  education: EducationInfo[];
  certifications: CertificationInfo[];
  experience: ExperienceInfo[];
  achievements: AchievementInfo[];
  profiles: ProfileInfo[];
  workflow: WorkflowStep[];
}
