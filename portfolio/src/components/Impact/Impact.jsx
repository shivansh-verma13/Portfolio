import { impact } from "../../data/profile";
import SectionHeading from "../shared/SectionHeading";
export default function Impact() {
  return (
    <section
      className="section container"
      id="impact"
      aria-label="Engineering impact"
    >
      <SectionHeading
        number="05"
        eyebrow="ENGINEERING IMPACT"
        title="Small decisions. Tangible outcomes."
        description="Selected results from my work at EDMO / iSchoolConnect. Approximate improvements reflect specific workflows and pages."
      />
      <div className="metrics-grid">
        {impact.map((metric) => (
          <div className="metric" key={metric.label}>
            <p className="metric-value">{metric.value}</p>
            <p>{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="latency-callout">
        <div>
          <span className="eyebrow">MULTI-AGENT RESPONSE LATENCY</span>
          <p>
            30–45s <span aria-hidden="true">→</span> <strong>4–10s</strong>
          </p>
        </div>
        <p>
          Faster responses, with interim conversational feedback while the
          system retrieves information.
        </p>
      </div>
    </section>
  );
}
