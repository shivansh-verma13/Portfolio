import PropTypes from "prop-types";
import { projects, otherProjects } from "../../data/projects";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import Arrow from "../shared/Arrow";
import "./portfolio.css";
function ProjectVisual({ kind }) {
  const flows = {
    interview: {
      heading: "INTERVIEW PIPELINE",
      nodes: ["Resume", "Questions", "Interview"],
      bottom: "TRANSCRIPT / SCHEDULING / RETRIES",
      symbol: "≈",
    },
    rag: {
      heading: "RETRIEVAL + ORCHESTRATION",
      nodes: ["Question", "Retrieve", "Respond"],
      bottom: "CONTEXT / GUARDRAILS / EVALUATION",
      symbol: "✳",
    },
    extractor: {
      heading: "INBOX → STRUCTURED DATA",
      nodes: ["Email", "Extract", "Review"],
      bottom: "ATTACHMENTS / MAPPING / VALIDATION",
      symbol: "⌘",
    },
  };
  const flow = flows[kind];
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      <div className="preview-top">
        <span>{flow.heading}</span>
        <span className="preview-dots">•••</span>
      </div>
      <div className="flow-symbol">{flow.symbol}</div>
      <div className="flow-nodes">
        {flow.nodes.map((node, index) => (
          <div key={node}>
            <span className="flow-node">{node}</span>
            {index < 2 && <span className="flow-arrow">→</span>}
          </div>
        ))}
      </div>
      <p className="preview-bottom">{flow.bottom}</p>
    </div>
  );
}
ProjectVisual.propTypes = { kind: PropTypes.string.isRequired };
function ProjectLinks({ links, title }) {
  if (!links) return null;
  return (
    <div className="project-links">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.label}: ${title}`}
        >
          {link.label} <Arrow />
        </a>
      ))}
    </div>
  );
}
ProjectLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string.isRequired,
};
export default function Portfolio() {
  return (
    <section
      className="section container"
      id="work"
      tabIndex={-1}
      aria-label="Selected work"
    >
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="Built to solve a real problem."
        description="A selection of professional systems, an award-winning prototype, and personal projects."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <article className="project-card">
              {project.image ? (
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="450"
                  />
                </div>
              ) : (
                <ProjectVisual kind={project.visual} />
              )}
              <div className="project-body">
                <div className="project-type">
                  <span>{project.type}</span>
                  {project.badge && (
                    <span className="project-badge">{project.badge}</span>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <details className="engineering-details">
                  <summary>
                    Engineering highlights <span aria-hidden="true">+</span>
                  </summary>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </details>
                <ProjectLinks links={project.links} title={project.title} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="work-note muted">
        Professional systems are described at a high level. Internal source code
        and client-sensitive details remain private. Workflow illustrations are
        conceptual, not product screenshots.
      </p>
      <details className="other-projects">
        <summary>
          <span>
            Other projects <span className="mono muted"> / 04</span>
          </span>
          <span aria-hidden="true">+</span>
        </summary>
        <div className="other-grid">
          {otherProjects.map((project) => (
            <article key={project.id} className="other-card">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.alt}
                  width="600"
                  height="338"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <h3>{project.title}</h3>
              <p className="mono other-stack">{project.stack}</p>
              <p>{project.description}</p>
              <ProjectLinks links={project.links} title={project.title} />
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
