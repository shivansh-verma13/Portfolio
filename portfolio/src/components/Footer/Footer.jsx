import { profile } from "../../data/profile";
export default function Footer() {
  return (
    <footer className="footer container">
      <div>
        <a className="brand-mark" href="#home" aria-label="sv. Back to top">
          sv<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
      <p>Thoughtfully built with React & Vite.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
