import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { profile } from "../../data/profile";
import Arrow from "../shared/Arrow";
import "./hero.css";
function EngineeringOrb() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 90, damping: 20 });
  const springY = useSpring(y, { stiffness: 90, damping: 20 });
  const move = (event) => {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.025);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.025);
  };
  return (
    <div
      className="engineering-visual"
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      aria-hidden="true"
    >
      <div className="visual-grid" />
      <span className="visual-caption">CONNECTED BY DESIGN</span>
      <motion.div
        className="orb-wrap"
        style={reduced ? {} : { x: springX, y: springY }}
      >
        <svg className="orb" viewBox="0 0 400 400" fill="none">
          <defs>
            <radialGradient id="orb-fill" cx=".35" cy=".3">
              <stop stopColor="#7953b2" stopOpacity=".3" />
              <stop offset="1" stopColor="#16121f" stopOpacity=".1" />
            </radialGradient>
            <linearGradient
              id="orb-line"
              x1="70"
              y1="50"
              x2="320"
              y2="360"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#c8b0ff" />
              <stop offset=".5" stopColor="#8860c9" />
              <stop offset="1" stopColor="#32233f" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="145"
            fill="url(#orb-fill)"
            stroke="url(#orb-line)"
          />
          <g stroke="url(#orb-line)" opacity=".65">
            {[30, 65, 100, 130].map((rx) => (
              <ellipse
                key={rx}
                cx="200"
                cy="200"
                rx={rx}
                ry="145"
                transform="rotate(-25 200 200)"
              />
            ))}
            {[35, 75, 110].map((ry) => (
              <ellipse
                key={ry}
                cx="200"
                cy="200"
                rx="145"
                ry={ry}
                transform="rotate(-25 200 200)"
              />
            ))}
          </g>
          <ellipse
            cx="200"
            cy="200"
            rx="183"
            ry="51"
            transform="rotate(-25 200 200)"
            stroke="#b9a0ed"
            strokeOpacity=".4"
            strokeDasharray="2 7"
          />
          <circle cx="332" cy="140" r="5" fill="#c8b0ff" />
          <circle cx="71" cy="262" r="3" fill="#8e6ac8" />
        </svg>
      </motion.div>
      <div className="system-label label-frontend">
        <span className="label-dot" /> frontend <span>01</span>
      </div>
      <div className="system-label label-backend">
        <span className="label-dot" /> backend <span>02</span>
      </div>
      <div className="system-label label-ai">
        <span className="label-dot" /> AI systems <span>03</span>
      </div>
      <div className="visual-bottom">
        <span>INTERFACE → SERVICE → INTELLIGENCE</span>
        <span>SV / 2026</span>
      </div>
    </div>
  );
}
export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">
            <span className="status-dot" /> SOFTWARE DEVELOPER AT EDMO
          </p>
          <p className="hero-name">Hi, I’m Shivansh Verma.</p>
          <h1 id="hero-title">
            Software engineer.
            <br />
            <span>Built for impact.</span>
          </h1>
          <p className="hero-disciplines">
            Full-Stack <span> / </span> Frontend <span> / </span> AI Systems
          </p>
          <p className="hero-description">
            I build fast, reliable products across frontend, backend, and AI.
            From production web applications to real-time experiences and
            conversational systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View my work <Arrow />
            </a>
            <a
              className="button button-secondary"
              href={profile.resume}
              download
            >
              Download resume <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <span>{profile.location}</span>
          </div>
        </div>
        <EngineeringOrb />
      </div>
      <div className="container hero-foot">
        <span>PRODUCTION SOFTWARE. MEASURABLE PROGRESS.</span>
        <a href="#experience">
          Explore the experience <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
