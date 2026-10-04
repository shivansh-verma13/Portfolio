import { skills } from "../../data/skills";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
export default function Skills() {
  return (
    <section
      className="section section-tinted"
      id="stack"
      tabIndex={-1}
      aria-label="Technical expertise"
    >
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="TECHNICAL EXPERTISE"
          title="The right tools for the product."
          description="Technologies I use across production work and personal projects. Depth where it matters, curiosity where it helps."
        />
        <div className="stack-grid">
          {skills.map((category) => (
            <Reveal className="stack-card" key={category.number}>
              <div className="stack-heading">
                <h3>{category.title}</h3>
                <span className="mono muted">{category.number}</span>
              </div>
              <p>{category.description}</p>
              <div className="tags primary-tags">
                {category.primary.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="secondary-skills">
                {category.secondary.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
