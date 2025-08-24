export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface TechnicalProject {
  title: string;
  url?: string;
  description: string;
  subProjects?: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  details?: string;
}

export interface Certification {
  name: string;
  url?: string;
  credential?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: WorkExperience[];
  projects: TechnicalProject[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
}