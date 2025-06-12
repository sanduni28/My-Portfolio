import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram } from "lucide-react";

// Framer Motion variants for reusable animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dx27zqp",
        "template_k6r1h0m",
        form.current,
        "Qu33znUhV7KGWgnJ6"
      )
      .then(
        (result) => {
          console.log("Message sent", result.text);
          setSent(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.error("Message failed", error.text);
          setSent(false);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className="max-w-6xl mx-auto p-8 mt-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="w-20 h-1 bg-[#40E0D0] mx-auto mb-10 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 bg-white/10 backdrop-blur-md p-6 shadow-2xl rounded-xl border border-white/20"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40E0D0] transition-all font-medium"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40E0D0] transition-all font-medium"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
            className="w-full bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40E0D0] transition-all font-medium"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-[#50bdbd]/80 hover:bg-[#40E0D0] px-4 py-2 rounded w-full text-[#003434] font-semibold text-xl transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {sent && (
            <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-400 text-center mt-2">Something went wrong. Please try again.</p>
          )}
        </motion.form>

        {/* Right Side: Image and Contact Info */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="../public/contact.png"
            alt="Contact"
            className="w-64 h-64"
            whileHover={{ scale: 1.05 }}
          />

          <div className="space-y-4 text-left">
            <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.03 }}>
              <Phone className="text-[#40E0D0]" size={28} />
              <span className="text-white font-semibold text-xl">+94 71 143 8795</span>
            </motion.div>
            <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.03 }}>
              <Mail className="text-[#40E0D0]" size={28} />
              <span className="text-white font-semibold text-xl">sadubandara313@gmail.com</span>
            </motion.div>
            <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.03 }}>
              <MapPin className="text-[#40E0D0]" size={28} />
              <span className="text-white font-semibold text-xl">Kandy, Sri Lanka</span>
            </motion.div>
          </div>

          <div className="flex gap-6 z-20 mt-6">
            {[
              {
                icon: <Github className="text-white" size={24} />,
                link: "https://github.com/sanduni28",
              },
              {
                icon: <Linkedin className="text-white" size={24} />,
                link: "https://www.linkedin.com/in/sanduni-bandara-6a43602a1",
              },
              {
                icon: <Instagram className="text-white" size={24} />,
                link: "https://www.instagram.com/_.sandu_bandara._/",
              },
              {
                icon: <Facebook className="text-white" size={24} />,
                link: "https://web.facebook.com/profile.php?id=61564873507083",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/30 hover:border-[#40E0D0] text-white hover:text-[#40E0D0] hover:bg-[#012424] transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
