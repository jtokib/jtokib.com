import { SkillCategory, Education, Certification } from './types';

interface SidebarSectionProps {
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
}

export function SidebarSection({ skills, education, certifications }: SidebarSectionProps) {
  return (
    <div className="resume-sidebar">
      <section className="resume-section">
        <h3 className="resume-section-title">Technical Skills</h3>
        
        {skills.map((skillCategory, index) => (
          <div key={index} className="resume-skill-category">
            <h4 className="resume-skill-category-title">
              {skillCategory.category}
            </h4>
            <div className="resume-skill-tags">
              {skillCategory.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="resume-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h3 className="resume-section-title">Education</h3>
        
        {education.map((edu, index) => (
          <div key={index} className="resume-education">
            <h4 className="resume-education-institution">
              {edu.institution}
            </h4>
            <p className="resume-education-degree">
              {edu.degree}
            </p>
            {edu.details && (
              <p className="resume-education-details">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h3 className="resume-section-title">Professional Certifications</h3>
        
        {certifications.map((cert, index) => (
          <div key={index} className="resume-certification">
            <p className="resume-certification-name">
              {cert.name}
            </p>
            {cert.url && cert.credential && (
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-certification-link"
              >
                {cert.credential} ↗
              </a>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}