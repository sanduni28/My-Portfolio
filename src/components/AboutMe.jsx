import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.section
            id="about"
            className="py-24 bg-black text-white px-6 scroll-smooth"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            {/* Title */}
            <motion.h2
                className="text-4xl font-bold text-white mb-4 text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                About Me
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
                className="w-20 h-1 bg-[#40E0D0] mx-auto mb-10 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Description */}
            <motion.div
                className="max-w-4xl mx-auto space-y-6 text-xl text-gray-300 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <p>
                    I am <span className="text-[#40E0D0] font-semibold">Sanduni Bandara</span>,
                    a <span className="text-[#40E0D0] font-semibold">Software Engineering undergraduate</span> at
                    The Open University of Sri Lanka.
                </p>

                <p>
                    I specialize in{" "}
                    <span className="text-[#40E0D0] font-semibold">Web Development</span>,{" "}
                    <span className="text-[#40E0D0] font-semibold">Mobile App Development</span>,{" "}
                    <span className="text-[#40E0D0] font-semibold">Full Stack Development</span>, and{" "}
                    <span className="text-[#40E0D0] font-semibold">UI/UX Design</span>. I’m passionate about building
                    intuitive, user-friendly digital experiences and staying current with modern technologies.
                </p>

                <p>
                    I'm eager to apply my academic knowledge to real-world challenges and contribute to impactful
                    projects. With a focus on <span className="text-[#40E0D0] font-semibold">teamwork</span>,{" "}
                    <span className="text-[#40E0D0] font-semibold">problem-solving</span>, and{" "}
                    <span className="text-[#40E0D0] font-semibold">continuous learning</span>, I aim to grow as an
                    IT professional and make a meaningful impact in the tech industry.
                </p>
            </motion.div>
        </motion.section>
    );
};

export default AboutMe;
