import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import head_logo from "../assets/head_logo.png";

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(".company-menu")) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <header className="font-IBM-Plex-Sans">
      {/* Top Header */}
      <div className="bg-blue-500 py-1 px-8 flex justify-between items-center text-white">
        <div className="flex items-center space-x-4">
          <a href="mailto:suiwise@gmail.com" className="flex items-center text-sm">
            <i className="fa-solid fa-envelope mr-2"></i>suiwise@gmail.com
          </a>
          <span className="border-l-2 h-4 mx-2"></span>
          <a href="tel:+23481554679" className="flex items-center text-sm">
            <i className="fa-solid fa-phone mr-2"></i>+23481554679
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-sm hover:underline">Log In</a>
          <span className="border-l-2 h-4 mx-2"></span>
          <a href="/register" className="text-sm hover:underline">Sign Up</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="text-xl"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="text-xl"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#" className="text-xl"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md py-2 px-8 flex justify-between items-center">
        <div className="flex items-center flex-col">
          <img src={head_logo} alt="Logo" className="h-12" />
          <p className="text-blue-600 text-xs">Powered by Sui💧</p>
        </div>
        <ul className="flex gap-4">
          <li><Link to="/" className="text-black">Home</Link></li>
          <li><Link to="/about-us" className="text-black">About Us</Link></li>
          <li><Link to="/features" className="text-black">Features</Link></li>
          <li><Link to="/resources" className="text-black">Resources</Link></li>
          <li className="relative">
            <a
              href="#"
              className="company-menu text-black"
              onClick={toggleDropdown}
            >
              Company <i className="fas fa-caret-down"></i>
            </a>
            {dropdownVisible && (
              <ul className="absolute bg-white shadow-md rounded-md min-w-[160px] mt-1">
                <li><a href="#interest-rates" className="block px-3 py-1 hover:bg-gray-100">Interest Rates</a></li>
                <li><a href="#faqs" className="block px-3 py-1 hover:bg-gray-100">FAQs</a></li>
                <li><a href="#contact-us" className="block px-3 py-1 hover:bg-gray-100">Contact Us</a></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/get-started" className="btn-primary">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
