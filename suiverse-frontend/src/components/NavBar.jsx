// src/components/NavBar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import head_logo from '../assets/head_logo.png';

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest('.company-menu')) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="font-IBM-Plex-Sans">
      {/* HEADER 1 */}
      <header className="bg-blue-500 py-1 px-8 flex justify-between items-center text-white">
        <div className="flex items-center space-x-4">
          <a href="mailto:suiwise@gmail.com" className="flex items-center text-sm">
            <i className="fa-solid fa-envelope mr-2"></i> suiwise@gmail.com
          </a>
          <span className="border-l-2 h-4 mx-2"></span> {/* Vertical Line */}
          <a href="tel:+23481554679" className="flex items-center text-sm">
            <i className="fa-solid fa-phone mr-2"></i> +23481554679
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login.html" className="text-sm hover:underline">Log In</a>
          <span className="border-l-2 h-4 mx-2"></span> {/* Vertical Line */}
          <a href="/register.html" className="text-sm hover:underline">Sign Up</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="text-xl"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="text-xl"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#" className="text-xl"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
      </header>

      {/* HEADER 2 */}
      <div className="sticky top-0 z-50 bg-white shadow-md py-2 px-8 flex justify-between items-center">
        <div className="flex items-center flex-col">
          <img src={head_logo} alt="Logo" height="140" width="100" />
          <p className="text-blue-600 text-xs ml-3">Powered by sui💧</p>
        </div>

        <div id="menu" className="text-2xl cursor-pointer hidden">
          <i className="fas fa-bars"></i>
        </div>

        <nav className="navbar">
          <ul className="flex gap-4 mx-6">
            <li><a href="#" className="text-base text-black">About Us</a></li>
            <li><a href="#" className="text-base text-black">Features</a></li>
            <li><a href="#" className="text-base text-black">Resources</a></li>
            <li className="relative">
              <a href="#" className="company-menu text-base text-black" onClick={toggleDropdown}>
                Company <i className="fas fa-caret-down"></i>
              </a>
              {dropdownVisible && (
                <ul className="absolute bg-white shadow-md rounded-md min-w-[160px] mt-1">
                  <li><a href="#interest-rates" className="block px-3 py-1 hover:bg-gray-100">Interest Rates</a></li>
                  <li><a href="#faqs" className="block px-3 py-1 hover:bg-gray-100">FAQ's</a></li>
                  <li><a href="#contact-us" className="block px-3 py-1 hover:bg-gray-100">Contact Us</a></li>
                </ul>
              )}
            </li>
            <li>
              <i id="search-button" className="fa-solid fa-magnifying-glass text-lg cursor-pointer"></i>
            </li>
            <li>
            <Link
                to="/get-started" // Replace with the route you want
                className="btn btn-primary text-black text-base px-4 py-2 rounded-full border-2 border-blue-500 bg-blue-500 hover:bg-blue-600"
              >
                Get Started
              </Link>    
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;