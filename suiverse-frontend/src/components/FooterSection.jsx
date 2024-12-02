import React from "react";
import sui_logo from "../assets/sui_logo.jpg";

const FooterSection = () => {
  return (
    <footer className="bg-blue-600 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {/* Column 1 */}
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-4">Suiwise<span>.</span></h3>
          <p className="text-sm leading-relaxed mb-4">
            Building bridges to Financial Inclusion. Making Africa a more revolutionized Continent.
          </p>
          <div className="flex space-x-2 mb-4">
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-md bg-slate-400 text-white text-xl">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-md bg-slate-400 text-white text-xl">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-md bg-slate-400 text-white text-xl">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-md bg-slate-400 text-white text-xl">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <img src={sui_logo} alt="Sui Logo" className="h-12 w-12 rounded-xl" />
            <p>Powered by Sui Technology.</p>
          </div>
        </div>
        {/* Other columns omitted for brevity */}
      </div>
      <div className="text-center text-white border-t border-gray-300 mt-6 pt-4">
        Copyright ©2024 All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
