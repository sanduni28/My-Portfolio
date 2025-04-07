import React from "react";
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiMysql,
    DiJava,
    DiPython,
    DiPhp,
    DiGithubBadge,
} from "react-icons/di";
import {
    FaFigma,
    FaLaravel,
    FaCuttlefish,
    FaCode,
    FaAndroid,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiFramer,
    SiR,
    SiSqlite,
    SiPycharm,
    SiEclipseide,
    SiApachenetbeanside,
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
        category: "UI/UX Design",
        technologies: [
            { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
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
];

const Skills = () => {
    return (
        <div className="max-w-[900px] mx-auto flex flex-col justify-center px-6 text-gray-200 pb-12 md:py-24" id="skills">
            <Reveal>
                <motion.h2
                    className="text-4xl font-bold mb-6 text-center text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Skills
                </motion.h2>
                <p className="text-center mb-10 text-white text-xl">
                    Here are some of the technologies and tools I have experience with:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="border border-[#40E0D0] p-6 rounded-xl bg-gray-900/40 shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-center">{skill.category}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skill.technologies.map((tech, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center space-x-3"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-3xl">{tech.icon}</span>
                                        <span className="text-lg">{tech.name}</span>
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
