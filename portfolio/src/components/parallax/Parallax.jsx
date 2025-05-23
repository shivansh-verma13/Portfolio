import "./parallax.css";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", type === "services" ? "-300%" : "300%"]
  );

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #222831, #000)"
            : "linear-gradient(180deg, #000, #222831)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div
        className="mountains"
        style={{
          y: yBg,
          backgroundImage:
            type === "services"
              ? `url(${"/mountains.png"})`
              : `url(${"/building.png"})`,
        }}
      ></motion.div>
      <motion.div
        style={{
          right: type === "services" && 0,
          left: type !== "services" && 0,
          x: xBg,
          backgroundImage:
            type === "services"
              ? `url(${"/ufo.png"})`
              : `url(${"/broom.png"})`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;

Parallax.propTypes = {
  type: PropTypes.string.isRequired,
};
