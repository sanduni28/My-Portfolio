import React from "react";
import { motion } from "framer-motion";

const educationData = [
    {
        title: "Bachelor of Software Engineering (Hons) UG",
        institution: "The Open University of Sri Lanka",
        year: "2023 - Present",
    },
    {
        title: "G.C.E Advanced Level",
        institution: "Biological Science Stream",
        year: "2019",
    },
    {
        title: "G.C.E Ordinary Level",
        year: "2016",
    },
    {
        title: "Certificate Course in English Language",
        institution: "International College of English Language",
        year: "2022",
    },
];

const Education = () => {
    return (
        <motion.div
            className="mt-2 px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-center text-4xl font-bold text-white mb-12">
                Education
            </h2>

            <div className="max-w-2xl mx-auto">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col sm:flex-row justify-between items-center bg-gray-800/50 backdrop-blur-md p-4 rounded-xl border border-[#40E0D0] shadow-lg hover:shadow-[#40E0D0]/50 transition-all duration-300 mb-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-[#40E0D0]">{edu.title}</h3>
                            {edu.institution && <p className="text-gray-300 mt-1 text-xl">{edu.institution}</p>}
                            <p className="text-gray-400 text-xl">{edu.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Education;
