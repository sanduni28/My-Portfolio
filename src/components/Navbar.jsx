import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <motion.nav 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold font-style: italic">Sanduni</h1>

                <ul className="hidden md:flex space-x-6 font-semibold">
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>

                <div className="md:hidden" onClick={() => setNav(!nav)}>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                {/* Mobile Menu Animation */}
                <motion.ul 
                    initial={{ x: "-100%" }} 
                    animate={{ x: nav ? 0 : "-100%" }} 
                    transition={{ duration: 0.3 }} 
                    className="fixed top-16 left-0 w-full bg-gray-900 p-6 text-center space-y-4 font-semibold"
                >
                    <li><Link to="about" smooth={true} duration={500} onClick={() => setNav(false)}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} onClick={() => setNav(false)}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} onClick={() => setNav(false)}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={() => setNav(false)}>Contact</Link></li>
                </motion.ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
