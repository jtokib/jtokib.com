import { TechnicalProject } from './types';

interface ProjectsSectionProps {
  projects: TechnicalProject[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">Technical Projects</h3>

      {projects.map((project, index) => (
        <div key={index} className="resume-project">
          <h4 className="resume-project-title">
            {project.title}
          </h4>
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-project-link"
            >
              {project.url.replace('https://', '')} ↗
            </a>
          )}
          <p className="resume-project-description">
            {project.description}
          </p>
          
          {project.subProjects && (
            <div className="resume-subprojects">
              {project.subProjects.map((subProject, subIndex) => (
                <div key={subIndex} className="resume-subproject">
                  <a 
                    href={subProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="resume-subproject-link"
                  >
                    {subProject.title} ↗
                  </a>
                  <p className="resume-subproject-description">
                    {subProject.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}