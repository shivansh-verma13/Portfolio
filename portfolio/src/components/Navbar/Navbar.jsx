import ThemeToggle from "./ThemeToggle";
import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "../../data/profile";
import "./Navbar.css";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    const home = document.getElementById("home");
    if (home) observer.observe(home);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (
        event.type === "pointerdown" &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
      if (event.type === "focusin" && !header.current?.contains(event.target))
        setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 769px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", close);
    document.addEventListener("focusin", close);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("focusin", close);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  const navigate = (id) => {
    setOpen(false);
    setActive(id);
    requestAnimationFrame(() =>
      document.getElementById(id)?.focus({ preventScroll: true }),
    );
  };
  return (
    <header className="navbar" ref={header}>
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="sv. Shivansh Verma, home">
          <span className="brand-mark">
            sv<span>.</span>
          </span>
          <span className="brand-name">Shivansh Verma</span>
        </a>
        <nav
          className={open ? "nav-links is-open" : "nav-links"}
          id="site-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => navigate(id)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a
            className="button button-small button-secondary"
            href={profile.resume}
            download
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            ref={toggle}
            aria-expanded={open}
            aria-controls="site-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
