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

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Education = () => {
    return (
        <motion.div
            id="education"
            className="mt-10 px-4 scroll-smooth"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-4xl font-bold text-white mb-4 text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Education
            </motion.h2>

            {/* Decorative Line */}
            <motion.div
                className="w-20 h-1 bg-[#40E0D0] mx-auto mb-10 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />

            <br />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }}
                        className="relative bg-gray-800/50 p-5 rounded-xl border border-[#40E0D0] shadow-md hover:shadow-[#40E0D0]/80 transition-all duration-300"
                    >


                        <h3 className="text-xl font-semibold text-[#40E0D0]">{edu.title}</h3>
                        {edu.institution && (
                            <p className="text-gray-300 text-lg mt-1">{edu.institution}</p>
                        )}
                        <p className="text-gray-400 text-lg mt-1">{edu.year}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Education;
