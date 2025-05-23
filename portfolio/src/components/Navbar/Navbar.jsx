import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/shivansh-verma-650a92222/">
            <img src="/linkedin.png" alt="linkedinsocial" />
          </a>
          <a href="https://github.com/shivansh-verma13">
            <img src="/github.png" alt="githubsocial" />
          </a>
          <a href="https://twitter.com/VerShivu">
            <img src="/twitter.png" alt="twittersocial" />
          </a>
          <a href="https://www.instagram.com/_shivansh.v">
            <img src="/instagram.png" alt="instagramsocial" />
          </a>
        </div>
      </div>
    </div>
  );
};
