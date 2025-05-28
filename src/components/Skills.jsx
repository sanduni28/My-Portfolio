import React from "react";
import {
    DiHtml5, DiCss3, DiJavascript1, DiReact, DiMysql,
    DiJava, DiPython, DiPhp, DiGithubBadge,
} from "react-icons/di";
import {
    FaFigma, FaLaravel, FaCuttlefish, FaAndroid,
} from "react-icons/fa";
import {
    SiTailwindcss, SiFramer, SiR, SiSqlite,
    SiPycharm, SiEclipseide, SiApachenetbeanside,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
    {
        category: "Programming Languages",
        technologies: [
            { name: "Java", icon: <DiJava className="text-blue-500" /> },
            { name: "Python", icon: <DiPython className="text-yellow-400" /> },
            { name: "C", icon: <FaCuttlefish className="text-blue-400" /> },
            { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
            { name: "PHP", icon: <DiPhp className="text-purple-500" /> },
            { name: "R", icon: <SiR className="text-blue-500" /> },
        ],
    },
    {
        category: "Web Development",
        technologies: [
            { name: "HTML5", icon: <DiHtml5 className="text-orange-600" /> },
            { name: "CSS3", icon: <DiCss3 className="text-blue-600" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        ],
    },
    {
        category: "Frameworks & Libraries",
        technologies: [
            { name: "React.js", icon: <DiReact className="text-blue-500" /> },
            { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
        ],
    },
    {
        category: "Databases",
        technologies: [
            { name: "MySQL", icon: <DiMysql className="text-blue-500" /> },
            { name: "SQLite", icon: <SiSqlite className="text-blue-500" /> },
        ],
    },
    {
        category: "Development Tools",
        technologies: [
            { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
            { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
            { name: "NetBeans", icon: <SiApachenetbeanside className="text-blue-500" /> },
            { name: "Android Studio", icon: <FaAndroid className="text-green-500" /> },
            { name: "PyCharm", icon: <SiPycharm className="text-green-600" /> },
            { name: "Eclipse", icon: <SiEclipseide className="text-indigo-600" /> },
        ],
    },
    {
        category: "UI/UX Design",
        technologies: [
            { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
        ],
    },
];

const Skills = () => {
    return (
        <div
            id="skills"
            className="max-w-7xl mx-auto flex flex-col justify-center px-6 text-gray-200 py-24 scroll-smooth"
        >
            <Reveal>
                {/* Title */}
                <motion.h2
                    className="text-4xl font-bold text-white mb-4 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Skills
                </motion.h2>

                {/* Decorative Line */}
                <motion.div
                    className="w-20 h-1 bg-[#40E0D0] mx-auto mb-10 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />

                {/* Intro Text */}
                <p className="text-center mb-12 text-white text-xl">
                    Here are some of the technologies and tools I have experience with:
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="border border-[#40E0D0] p-6 rounded-2xl bg-gray-900/40 shadow-md hover:shadow-cyan-500/30 transition-shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                                {skill.category}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skill.technologies.map((tech, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center space-x-3"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-3xl">{tech.icon}</span>
                                        <span className="text-lg text-gray-300">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Reveal>
        </div>
    );
};

export default Skills;
