import "./services.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView={!isBelowMd && "animate"}
      ref={ref}
      animate={isBelowMd && "animate"}
    >
      <motion.div className="servicesTextContainer" variants={variants}>
        <p>
          I focus on growing you
          <br /> and learning new.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="peopleImage" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            <span>Front-End</span> Development
          </h2>
          <p>
            React.js, Tailwind CSS, Material UI, HTML5/HTML, CSS/CSS3, React
            Bootstrap/Bootstrap, React Router, JQuery, Progressive Web
            Apps(PWAs),
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            <span>Back-End</span> Development
          </h2>
          <p>
            Node.js, Express.js, MongoDB, Mongoose, EJS, Version Control- Git
            and GitHub, JWT
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            <span>API&apos;s</span> Development
          </h2>
          <p>RESTful APIs,</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            <span>Machine Learning</span> Engineer
          </h2>
          <p>
            Sklearn, Pandas, Numpy, Regression, Classification, Clustering,
            Computer Vision,
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
