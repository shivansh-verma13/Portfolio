import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    title: "MERN-ChatBot",
    img: "/chatbot.png",
    demo: "https://youtu.be/9jNV4EnDWD8",
    desc: "Developed a MERN Stack app using OpenAI’s 3.5 Turbo model. Integrated Material UI for an intuitive UI. Enabled users to receive instant responses to queries",
  },
  {
    id: 2,
    title: "MERN-ChattingApp",
    img: "/chattingApp.png",
    demo: "https://youtu.be/Mva_jt6xWJo",
    desc: "Developed a dynamic MERN Stack app Chatting App incorporated with emojis. Implemented Web Sockets for real-time messaging. Enhanced user engagement with Tailwind CSS and Animate on Scroll",
  },
  {
    id: 3,
    title: "MERN-RecipeBlog",
    img: "/recipleBlog.png",
    demo: "https://youtu.be/NR5wuXwaJ0Q",
    desc: "Developed a captivating recipe blog app with MERN Stack and Material UI. Featured robust authentication functionality. Provided users with an immersive experience to explore and share favorite recipes securely",
  },
  {
    id: 4,
    title: "VideoMeet",
    img: "/videoMeet.png",
    demo: "https://videomeeet.netlify.app/",
    desc: "Created a MERN Stack app utilizing WebRTC and Tailwind CSS. Crafted a Google Meet replica for two peers. Showcased expertise in real-time communication technologies",
  },
  {
    id: 4,
    title: "MERN-Notepad",
    img: "/notepad.png",
    demo: "https://youtu.be/z_Xg0T2b-AY",
    desc: "Created a MERN stack notepad app with Material UI. Implemented features for updating, deleting, and adding notes. Provided users with a convenient platform for managing notes",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="portfolioContainer">
        <div className="portfolioWrapper">
          <div className="portfolioImageContainer" ref={ref}>
            <img src={item.img} alt="PortfolioImage" />
          </div>
          <motion.div className="portfolioTextContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.demo ? item.demo : "#"}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item, idx) => (
        <Single key={idx} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;

Single.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  desc: PropTypes.string,
};
