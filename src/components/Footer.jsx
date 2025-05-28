const Footer = () => {
    return (
      <footer className="text-white py-6 px-6 ">
        <div className="border-t border-[#40E0D0] pt-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            {/* Name & Position */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-[#40E0D0]">
                Sanduni Bandara
              </h3>
              <p className="text-gray-400">Passionate Software Engineer</p>
            </div>
  
            {/* Copyright */}
            <p className="text-center md:text-right text-gray-400 font-semibold ">
              © 2025 Sanduni Bandara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  