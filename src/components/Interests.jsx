import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    Smartphone,
    LayoutDashboard,
    Server,
    Trophy,
    Volleyball,
    Flame
} from "lucide-react";

const interests = [
    { icon: <Code size={32} className="text-[#40E0D0]" />, title: "Web Development" },
    { icon: <LayoutDashboard size={32} className="text-[#40E0D0]" />, title: "UI Designing & Development" },
    { icon: <Smartphone size={32} className="text-[#40E0D0]" />, title: "Mobile App Development" },
    { icon: <Server size={32} className="text-[#40E0D0]" />, title: "Full Stack Development" },
];

const hobbies = [
    {
        icon: <Volleyball size={32} className="text-[#40E0D0]" />,
        title: "Netball Player - Inter School Championship",
        detail: "Runner Up (2011)",
    },
    {
        icon: <Flame size={32} className="text-[#40E0D0]" />,
        title: "Traditional Dancing",
        detail: "Kandyan Wes Dancer",
    },
];

const Interests = () => {
    return (
        <section className="bg-[#0e0e0e] text-white py-20 px-6" id="interests">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <motion.h2
                    className="text-4xl font-bold text-white mb-4 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Interests & Hobbies
                </motion.h2>


                {/* Decorative Line */}
                <motion.div
                    className="w-20 h-1 bg-[#40E0D0] mx-auto mb-10 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />


                {/* Interests */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-semibold mb-8 text-white">Interests</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {interests.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#1a1a1a] rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <div className="mb-3 flex justify-center">{item.icon}</div>
                                <p className="text-lg font-medium text-center">{item.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Hobbies */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold mb-8 text-white">Hobbies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {hobbies.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#1a1a1a] rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.3 }}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    {item.icon}
                                    <p className="text-lg font-semibold">{item.title}</p>
                                </div>
                                <p className="text-gray-400 ml-10">{item.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Interests;
