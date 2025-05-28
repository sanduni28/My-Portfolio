import React from "react";
import { motion } from "framer-motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { DiReact, DiMysql, DiJava, DiPhp } from "react-icons/di";
import { FaLaravel, FaAndroid, FaFigma } from "react-icons/fa";
import { SiSqlite, SiTailwindcss } from "react-icons/si";

// Projects Data
const projects = [
    {
        name: "My Solo Traveler SL App",
        year: "2024",
        align: "right",
        image: "/Solo_Traveller.jpg",
        link: "https://github.com/sanduni28/Solo_Traveller_SL_Mobile_App",
        description: "A mobile app designed to assist solo travelers in Sri Lanka with accommodations, itineraries, and navigation.",
        technologies: [
            { icon: <DiJava className="text-blue-600 text-2xl" /> },
            { icon: <FaAndroid className="text-green-500 text-2xl" /> },
            { icon: <SiSqlite className="text-blue-500 text-2xl" /> }
        ]
    },
    {
        name: "CareerCove Job Portal",
        year: "2024",
        align: "left",
        image: "/job portal.jpg",
        link: "https://github.com/MaheshNamal-droid/careercove",
        description: "A web-based job portal that connects job seekers with employers, featuring advanced search and application tracking.",
        technologies: [
            { icon: <DiReact className="text-blue-500 text-2xl" /> },
            { icon: <FaLaravel className="text-red-600 text-2xl" /> },
            { icon: <DiMysql className="text-blue-500 text-2xl" /> },
            { icon: <DiPhp className="text-purple-500 text-3xl" /> }
        ]
    },
    {
        name: "Water Conservation App - Figma",
        year: "2024",
        align: "right",
        image: "/water conservation.jpg",
        link: "https://www.figma.com/design/H5zRBJcaKAGg8CC8XKreLT/BlueGuide-mobile-application?node-id=0-1&p=f&t=luld2FnBMrrgdDbN-0",
        description: "A Figma prototype for BlueGuide, a mobile app that provides water-saving tips and encourages sustainable water use through interactive challenges.",
        technologies: [
            { icon: <FaFigma className="text-purple-500 text-2xl" /> }
        ]
    },
];

// ProjectsMain Component
const ProjectsMain = () => {
    return (
        <div id="projects" className="max-w-[1200px] mx-auto px-4 py-16 bg-black text-white">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <ProjectsText />
            </motion.div>
            <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
                {projects.map((project, index) => (
                    <SingleProject key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

// ProjectsText Component
const ProjectsText = () => {
    return (
        <div className="flex flex-col items-center mt-[6px]">
            <motion.h2
                className="text-4xl font-bold text-white mb-4 text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                My Projects
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
                className="w-20 h-1 bg-[#40E0D0] mx-auto mb-10 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />

            <p className="text-xl text-center">
                These are a few of the web and mobile development projects I have worked on, ranging from mobile applications to full-stack websites with unique features and functionalities.
            </p>
        </div>
    );
};

// SingleProject Component
const SingleProject = ({ name, year, align, image, link, description, technologies }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } justify-end sm:flex-col`}
        >
            <div>
                <h2 className="md:text-3xl sm:text-lg font-bold text-[#40E0D0]">{name}</h2>
                <h2 className="text-xl text-white font-special sm:text-center md:text-left">
                    {year}
                </h2>
                <p className="text-md text-gray-300 mt-2">{description}</p>

                {/* Technologies Section */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white">Technologies:</h3>
                    <div className="flex gap-4 mt-2">
                        {technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-white">
                                {tech.icon}
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl font-semibold flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === "left" ? "md:justify-self-end" : "md:justify-self-start"
                        }`}
                >
                    View
                    <BsFillArrowUpRightCircleFill />
                </a>
            </div>
            <div className="w-[600px] h-[250px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
                <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
        </motion.div>
    );
};

export default ProjectsMain;
