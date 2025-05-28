import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const Hero = () => {
    return (
        <div className="bg-[#0e0e0e] text-white py-20 px-44 ">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">

                {/* Left Side Content */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {/* Typing Animation */}
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            1000,
                            "Software Engineer",
                            1000,
                            "Web Developer",
                            1000,
                            "Mobile Developer",
                            1000,
                            "Tech Explorer",
                            1000,
                            "UI/UX Enthusiast",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-3xl md:text-5xl italic mb-4"
                    />
                    <br />
                    <br />
                    {/* Name and Title */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-6xl text-2xl tracking-tight mb-4"
                    >
                        Hi, I am <br />
                        <span className="text-[#40E0D0]">SANDUNI BANDARA</span>
                    </motion.p>
                    <br />
                    {/* Short Bio */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-xl text-lg mb-6 text-justify text-sans"
                    >
                        Passionate about creating seamless digital experiences, I’m a software engineering undergraduate learning and building every day.
                    </motion.p>
                    <br />
                    <br />
                    <br />
                    {/* Social Links and Download CV Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-col items-start gap-4"
                    >
                        {/* Social Icons */}
                        <div className="flex gap-6 text-4xl text-[#40E0D0] z-20">
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://github.com/sanduni28"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="text-[#40E0D0]" size={32} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.linkedin.com/in/sanduni-bandara-6a43602a1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="text-[#40E0D0]" size={32} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.instagram.com/_.sandu_bandara._/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="text-[#40E0D0]" size={32} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://web.facebook.com/profile.php?id=61564873507083"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="text-[#40E0D0]" size={32} />
                            </motion.a>
                        </div>

                        {/* Download CV Button */}
                        <motion.a
                            href="/Sanduni_Bandara-Resume.pdf"
                            download="Sanduni_Bandara_CV"
                            className="mt-4 inline-block px-6 py-3 text-white border-2 border-[#40E0D0] rounded-lg text-xl hover:bg-[#40E0D0] hover:text-gray-900 transition-all duration-300"
                        >
                            Download CV
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Side Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex justify-center items-center mt-16"
                >
                    <motion.img
                        src={profilepic}
                        className="w-[600px] h-[600px] "
                        alt="Sanduni Bandara"
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
