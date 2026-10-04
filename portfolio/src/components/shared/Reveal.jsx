import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
export default function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0 }}
      whileInView={reduced ? undefined : { y: [12, 0], opacity: [0.85, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}
Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};
