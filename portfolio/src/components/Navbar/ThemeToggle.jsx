import { useEffect, useState } from "react";

const modes = ["system", "light", "dark"];
export default function ThemeToggle() {
  const [mode, setMode] = useState("system");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (modes.includes(saved)) setMode(saved);
    } catch { /* Storage may be unavailable in private browsers. */ }
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const resolved = mode === "system" ? (media.matches ? "dark" : "light") : mode;
      document.documentElement.dataset.theme = resolved;
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", resolved === "dark" ? "#0c0c11" : "#faf9fc");
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [mode]);
  const change = () => {
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    setMode(next);
    try { localStorage.setItem("portfolio-theme", next); } catch { /* Keep the in-memory preference. */ }
  };
  return <button type="button" className="theme-toggle" onClick={change}
    aria-label={`Theme: ${mode}. Switch to ${modes[(modes.indexOf(mode) + 1) % modes.length]} mode.`}
    title={`Theme: ${mode}`}>
    <span aria-hidden="true">{mode === "light" ? "☀" : mode === "dark" ? "☾" : "◐"}</span>
    <span className="theme-label">{mode}</span>
  </button>;
}
