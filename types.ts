
export interface Skill {
  id: string;
  name: string;
  level?: number; // Optional: 0-100 for proficiency
  icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Optional: for an icon next to the skill
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItemDetails { // Renamed from Experience
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  logoUrl?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

// Data structures for JSON files

export interface PersonalInfo {
  name: string;
  email: string;
  githubUsername: string;
  linkedinUsername: string;
  portfolioTitle: string;
}

export interface NavbarData {
  links: NavLink[];
}

export interface HeroData {
  greeting: string;
  subtitle: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
}

export interface AboutData {
  title: string;
  profileImageUrl: string;
  introductionParagraphs: string[];
  philosophyTitle: string;
  philosophyStatement: string;
}

export interface SkillsData {
  title: string;
  categories: SkillCategory[];
}

export interface ProjectsData {
  title: string;
  projectList: Project[];
}

export interface ExperienceData {
  title: string;
  experienceList: ExperienceItemDetails[];
}

export interface ContactData {
  title: string;
  introText: string;
  successMessage: string;
  formPlaceholders: {
    name: string;
    email: string;
    message: string;
  };
  submitButtonText: string;
  directEmailIntro: string;
}

export interface FooterData {
  copyrightSuffix: string;
  builtWithText: string;
}
