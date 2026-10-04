import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
export default function About() {
  return (
    <section
      className="section container"
      id="about"
      tabIndex={-1}
      aria-label="Engineering profile"
    >
      <Reveal>
        <SectionHeading
          number="01"
          eyebrow="ENGINEERING PROFILE"
          title="From interface to infrastructure."
        />
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-copy">
          <p className="lead">
            I work across the product, not just one layer of the stack.
          </p>
          <p>
            At EDMO / iSchoolConnect, I build production features across
            frontend, backend, and AI. My work spans responsive interfaces, API
            performance, real-time systems, and conversational workflows.
          </p>
          <p>
            I care about how a product behaves in practice: its speed,
            reliability, and clarity for the people using it. I work with
            product, design, and QA to take features from requirements through
            release.
          </p>
          <div className="profile-pill">
            <img
              src="/images/shivansh.webp"
              width="56"
              height="56"
              alt="Shivansh Verma"
              loading="lazy"
              decoding="async"
            />
            <div>
              <strong>Shivansh Verma</strong>
              <span>Software Developer · Noida, India</span>
            </div>
          </div>
        </Reveal>
        <div className="capability-grid">
          {[
            [
              "01",
              "Frontend engineering",
              "Responsive interfaces, better rendering, and measurable page performance.",
            ],
            [
              "02",
              "Backend engineering",
              "API integrations, caching, query optimization, and reliable services.",
            ],
            [
              "03",
              "Full-stack products",
              "Production features that connect the interface, data, and business workflow.",
            ],
            [
              "04",
              "AI / LLM systems",
              "Retrieval, orchestration, evaluation, and conversational experiences.",
            ],
          ].map(([number, title, description]) => (
            <Reveal className="capability-card" key={number}>
              <span className="mono muted">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
