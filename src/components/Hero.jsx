import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineFacebook
} from "react-icons/ai";


const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">

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
                            "Creative Coder",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
                    />

                    {/* Name and Title */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-2xl tracking-tight mb-4"
                    >
                        Hi, I am <br />
                        <span className="text-[#40E0D0]">Sanduni Bandara</span>
                    </motion.p>

                    {/* Short Bio */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        Passionate about crafting beautiful and interactive web experiences with React and modern UI frameworks.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >
                        <div className="flex gap-6 flex-row text-4xl md:text-4xl text-[#40E0D0] z-20">
                            {/* GitHub - White */}
                            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineGithub className="text-white" />
                            </motion.a>

                            {/* LinkedIn - Blue */}
                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineLinkedin className="text-white" />
                            </motion.a>

                            {/* Instagram - Gradient */}
                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineInstagram className="text-white" />
                            </motion.a>

                            {/* Facebook - Blue */}
                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineFacebook className="text-white" />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Profile Picture */}
                <motion.img
                    src={profilepic}
                    className="w-[300px] md:w-[450px] rounded-full border-4 border-purple-500 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );
};

export default Hero;
