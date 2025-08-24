import { PersonalInfo } from './types';

interface ResumeHeaderProps {
  personal: PersonalInfo;
}

export function ResumeHeader({ personal }: ResumeHeaderProps) {
  return (
    <div className="resume-header">
      <h1 className="resume-name">
        {personal.name}
      </h1>
      
      <h2 className="resume-title">
        {personal.title}
      </h2>
      
      <div className="resume-contact">
        <span>{personal.location}</span>
        <span>{personal.phone}</span>
        <a href={`mailto:${personal.email}`} className="resume-email">
          {personal.email}
        </a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="resume-linkedin">
          linkedin.com/in/toki-burke
        </a>
      </div>
    </div>
  );
}