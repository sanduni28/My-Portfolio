import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
    {
        title: "Introduction to Java",
        issuer: "sololearn",
        date: "August 2023",
        image: "/java_certificate.jpg",
    },
    {
        title: "Introduction to Python",
        issuer: "sololearn",
        date: "February 2023",
        image: "/python_certificate.jpg",
    },
    {
        title: "Introduction to SQL",
        issuer: "sololearn",
        date: "February 2023",
        image: "/sql_certificate.jpg",
    },
    {
        title: "Data Science Foundations",
        issuer: "Great Learning",
        date: "March 2024",
        image: "/data_certificate.jpg",
    },
    {
        title: "API Test Automation with Postman",
        issuer: "Test Automation University",
        date: "October 2024",
        image: "/postman_certificate.png",
    },
    {
        title: "Codeless Test Automation with Selenium IDE",
        issuer: "Test Automation University",
        date: "March 2024",
        image: "/selenimu_certificate.png",
    },
    {
        title: "Cost of Software Quality ",
        issuer: "edApp",
        date: "March 2024",
        image: "/cost_SW_certificate.PNG",
    },
    {
        title: "Foundation for Test Automation",
        issuer: "Test Automation University",
        date: "March 2024",
        image: "/test_automation_certificate.png",
    },
];

const Certifications = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 2 >= certifications.length ? 0 : prevIndex + 2
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 2 < 0 ? certifications.length - 2 : prevIndex - 2
        );
    };

    const currentCertifications = certifications.slice(currentIndex, currentIndex + 2);

    return (
        <div id="certifications" className="max-w-[900px] mx-auto px-4 py-24 text-white relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-white">Certifications</h2>
                <p className="text-xl text-white mt-4">
                    Here are some of the certifications I have earned, showcasing my skills and knowledge.
                </p>
            </motion.div>

            {/* Display current batch of certifications */}
            <div className="flex justify-between gap-2 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {currentCertifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg p-4 hover:shadow-2xl transition-shadow w-[45%] h-[450px] hover:scale-105"
                        >
                            <div className="relative">
                                <motion.img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-[250px] object-cover rounded-lg mb-4"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#40E0D0]">{cert.title}</h3>
                            <h3 className="text-lg font-medium text-gray-300">{cert.issuer}</h3>
                            <p className="text-white mt-2">{cert.date}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <br />

            {/* Arrow buttons positioned outside */}
            <div
                className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 text-3xl cursor-pointer text-[#40E0D0] z-10"
                onClick={goToPrev}
            >
                <ChevronLeft size={50} />
            </div>
            <div
                className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 text-3xl cursor-pointer text-[#40E0D0] z-10"
                onClick={goToNext}
            >
                <ChevronRight size={50} />
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4">
                {certifications.length > 2 && (
                    <>
                        {Array(Math.ceil(certifications.length / 2))
                            .fill()
                            .map((_, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => setCurrentIndex(index * 2)}
                                    className={`w-3 h-3 mx-2 cursor-pointer rounded-full ${Math.floor(currentIndex / 2) === index
                                            ? "bg-[#40E0D0]"
                                            : "bg-gray-500"
                                        }`}
                                    whileHover={{ scale: 1.3 }}
                                />
                            ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Certifications;
