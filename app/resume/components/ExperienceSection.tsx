import { WorkExperience } from './types';

interface ExperienceSectionProps {
  experience: WorkExperience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">Professional Experience</h3>

      {experience.map((job, index) => (
        <div key={index} className="resume-job">
          <h4 className="resume-job-title">
            {job.title}
          </h4>
          <p className="resume-job-company">
            {job.company} | {job.duration} | {job.location}
          </p>
          <ul className="resume-job-responsibilities">
            {job.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex} className="resume-responsibility">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}