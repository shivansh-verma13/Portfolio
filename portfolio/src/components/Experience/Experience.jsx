import { experience } from "../../data/experience";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
export default function Experience() {
  return (
    <section
      className="section section-tinted"
      id="experience"
      tabIndex={-1}
      aria-label="Professional experience"
    >
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="EXPERIENCE"
          title="Where the work ships."
          description="Production features, performance improvements, and the teams behind them."
        />
        <div className="experience-list">
          {experience.map((job) => (
            <Reveal key={job.id}>
              <article
                className={`experience-card ${job.current ? "current-role" : ""}`}
              >
                <div className="experience-meta">
                  <p className="mono muted">{job.date}</p>
                  <h3>{job.company}</h3>
                  <p className="role-name">{job.role}</p>
                  {job.current && (
                    <span className="current-badge">
                      <span className="status-dot" /> CURRENT ROLE
                    </span>
                  )}
                  <div className="tags">
                    {job.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <ul className="impact-list">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="experience-note muted">
          Earlier internship period: September–November 2023.
        </p>
      </div>
    </section>
  );
}
