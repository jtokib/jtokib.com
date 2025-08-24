import { ResumeData } from './types';
import { ResumeHeader } from './ResumeHeader';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { SidebarSection } from './SidebarSection';

interface ResumeViewProps {
  data: ResumeData;
}

export function ResumeView({ data }: ResumeViewProps) {
  return (
    <div className="resume-container">
      <ResumeHeader personal={data.personal} />
      <div className="resume-grid">
        <div className="resume-main-content">
          <ExperienceSection experience={data.experience} />
          <ProjectsSection projects={data.projects} />
        </div>
        <SidebarSection 
          skills={data.skills} 
          education={data.education}
          certifications={data.certifications}
        />
      </div>
    </div>
  );
}