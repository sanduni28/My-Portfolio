import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.section
            id="about"
            className="py-24 bg-black text-white text-center px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <br />
            {/* Animated Text Container */}
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <p className="text-gray-300 text-justify text-xl">
                    I am Sanduni Bandara, a <span className="text-[#40E0D0] font-semibold">Software Engineering </span> undergraduate at The Open University of Sri Lanka.
                    I specialize in <span className="text-[#40E0D0] font-semibold">Web Development</span>,  <span className="text-[#40E0D0] font-semibold"> Mobile App Development </span>, <span className="text-[#40E0D0] font-semibold">Full Stack Development </span>, and <span className="text-[#40E0D0] font-semibold">UI/UX design</span>,
                    with a passion for creating intuitive, user-friendly digital experiences. I'm always looking to expand my skillset and stay up-to-date with the latest technologies.
                </p>
                <br />
                <p className="text-gray-300 leading-relaxed text-justify text-xl">
                    I’m eager to apply my academic knowledge to real-world challenges and contribute to innovative projects. With a focus on teamwork, problem-solving, and continuous learning,
                    I aim to grow as an IT professional and make a meaningful impact in the field.
                </p>


            </motion.div>
        </motion.section>
    );
};

export default AboutMe;
