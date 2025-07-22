import { Link as ScrollLink } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const linkProps = {
    smooth: true,
    offset: -80,
    duration: 600,
    className: "hover:underline cursor-pointer",
  };

  return (
    <footer className="bg-[#2064C4] text-white">
      {/* Top section */}
      <div className="border-b border-white/20 py-6 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Site Title - Left */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">
            <span className="text-white">Master</span>{" "}
            <span className="text-orange-300">Services</span>
          </h1>
          <p className="text-[13px] text-white">AC • Electric • Plumbing</p>
        </div>

        {/* Navigation - Right */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium">
          <ScrollLink to="home" {...linkProps}>Home</ScrollLink>
          <ScrollLink to="services" {...linkProps}>Services</ScrollLink>
          <ScrollLink to="about" {...linkProps}>About</ScrollLink>
          <ScrollLink to="request" {...linkProps}>Contact</ScrollLink>
        </nav>
      </div>

      {/* Bottom section */}
      <div className="py-4 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        {/* Left - Copyright */}
        <div>© {new Date().getFullYear()} Master Services. All rights reserved.</div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-white text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaInstagram />
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
