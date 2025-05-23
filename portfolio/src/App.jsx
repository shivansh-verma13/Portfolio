import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Parallax from "./components/parallax/Parallax";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <div>
      <Toaster
        position="right-top"
        toastOptions={{
          success: {
            style: {
              background: "#fff",
            },
          },
          error: {
            style: {
              background: "#D04848",
            },
          },
          iconTheme: {
            primary: "orange",
            secondary: "#000",
          },
        }}
      />
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};
