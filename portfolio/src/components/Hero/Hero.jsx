import "./hero.css";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="hero">
      <div className="heroWrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>SHIVANSH VERMA</motion.h2>
          <motion.h1 variants={textVariant}>
            Web developer, Machine Learning engineer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariant}>
            <motion.button className="worksButton" variants={textVariant}>
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>

            <motion.button className="contactButton" variants={textVariant}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariant}
            src="/scroll.png"
            alt="scrollImage"
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        Developer Engineer Designer
      </motion.div>

      <div style={{ width: "50%" }}>
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "-40%",
            zIndex: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={2.2} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="rebeccapurple"
                attach="material"
                distort={0.25}
                speed={3}
              />
            </Sphere>
          </Canvas>
        </div>
        <div
          className="imageContainer"
          // style={{ animation: isBelowMd && "none" }}
        >
          <img src={!isBelowMd ? "/hero1.png" : "/hero1.png"} alt="myImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
