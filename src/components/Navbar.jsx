import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold italic">Sanduni</h1>

        <ul className="hidden md:flex space-x-6 font-semibold text-xl">
          <li><a href="#about" className="hover:text-[#40E0D0]">About</a></li>
          <li><a href="#skills" className="hover:text-[#40E0D0]">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#40E0D0]">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#40E0D0]">Contact</a></li>
        </ul>

        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="fixed top-16 left-0 w-full bg-gray-900 p-6 text-center space-y-4 font-semibold text-xl md:hidden">
            <li><a href="#about" onClick={() => setNav(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setNav(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setNav(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setNav(false)}>Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
