import PropTypes from "prop-types";
export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>{number} /</span> {eyebrow}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
SectionHeading.propTypes = {
  number: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
