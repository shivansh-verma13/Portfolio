import { education } from "../../data/profile";
export default function Education() {
  return (
    <section
      className="education-section container"
      aria-labelledby="education-heading"
    >
      <div>
        <p className="eyebrow">06 / FOUNDATION</p>
        <h2 id="education-heading">Education</h2>
      </div>
      <div className="education-copy">
        <h3>{education.degree}</h3>
        <p>{education.school}</p>
        <span className="mono muted">
          {education.date} · {education.grade}
        </span>
      </div>
    </section>
  );
}
