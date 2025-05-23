import "./contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending email...", { id: "sending-email" });
    emailjs
      .sendForm("service_l1t91zo", "template_aolg40s", form.current, {
        publicKey: "uvYherv7v1bJuizLo",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Sent email successfully!", { id: "sending-email" });
        },
        () => {
          form.current.reset();
          toast.error("Email sending failed", { id: "sending-email" });
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div variants={variants} className="contactTextContainer">
        <motion.h1 variants={variants}>Let&apos;s Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>shivansh.vrma.10@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>Ghaziabad, U.P.</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>(+91) 7065595286</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phone"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M49 15a24 24 0 0 1 0 34"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M42 22a14.15 14.15 0 0 1 0 20"
            />
            <motion.rect
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              x="8"
              y="8"
              width="28"
              height="48"
              rx="4"
            />
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              x1="18"
              y1="12"
              x2="26"
              y2="12"
            />
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3 }}
              x1="20"
              y1="52"
              x2="24"
              y2="52"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={form}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          onSubmit={sendEmail}
        >
          <input
            autoComplete="off"
            type="text"
            required
            placeholder="Name"
            name="name"
          />
          <input
            autoComplete="off"
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            autoComplete="off"
            rows={8}
            placeholder="Message"
            name="message"
          />
          <button>
            <span>Let&apos;s Connect</span>
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
