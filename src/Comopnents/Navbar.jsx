import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { useModal } from "../Modal/ModalContext"; // optional: only needed if you use modal

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal(); // optional: comment if not using modal

  // id must match the ids used in App.jsx sections
  const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Plumbing", target: "services" },
    { label: "Heating", target: "services" },
    { label: "Electrical", target: "services" },
    { label: "Reviews", target: "testimonials" },
    { label: "Contact", target: "request" },
  ];

  const scrollProps = {
    smooth: true,
    offset: -80,
    duration: 600,
    onClick: () => setMenuOpen(false),
    className: "text-white font-semibold cursor-pointer hover:text-yellow-300 transition-colors duration-200",
  };

  const scrollBtnProps = {
    ...scrollProps,
    className:
      "cursor-pointer bg-gradient-to-r from-[#F2C30B] to-[#E18412] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:from-[#E18412] hover:to-[#F2C30B] transition duration-300",
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#2064C4] shadow-md">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <li key={i}>
              <ScrollLink to={item.target} {...scrollProps}>
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Desktop Appointment Button */}
        <div className="hidden lg:block">
          <ScrollLink to="contact" {...scrollBtnProps}>
            Book Appointment
          </ScrollLink>
          {/* OR use modal:
          <button onClick={openModal} className={scrollBtnProps.className}>
            Book Appointment
          </button> 
          */}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden bg-[#2064C4] text-white px-6 py-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-4">
          {navItems.map((item, i) => (
            <li key={i}>
              <ScrollLink to={item.target} {...scrollProps}>
                {item.label}
              </ScrollLink>
            </li>
          ))}
          <li>
            <ScrollLink to="contact" {...scrollBtnProps}>
              Book Appointment
            </ScrollLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
