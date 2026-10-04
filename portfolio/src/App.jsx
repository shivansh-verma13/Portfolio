import { MotionConfig } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Impact from "./components/Impact/Impact";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Impact />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--surface)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-strong)",
            pointerEvents: "none",
          },
        }}
      />
    </MotionConfig>
  );
}
