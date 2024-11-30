import React from 'react';
import sui_logo from'../assets/sui_logo.jpg'

const FooterSection = () => {
  return (
    <footer className="bg-blue-600 p-10">
      <section className="footer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {/* Box 1 */}
          <div className="box text-white">
            <h3 className="text-2xl font-bold mb-4">
              Suiwise<span>.</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Building bridges to Financial Inclusion. Making Africa a more
              revolutionized Continent.
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
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <img src={sui_logo} alt="sui_logo" className="h-12 w-12 rounded-xl" />
              <p>Powered by Sui Technology.</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="box text-white">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <a href="#" className="block text-sm mb-2">
              <i className="fa-solid fa-phone mr-2"></i> +11(111)2345678
            </a>
            <a href="#" className="block text-sm mb-2">
              <i className="fa-solid fa-phone mr-2"></i> +11(111)2345678
            </a>
            <a href="#" className="block text-sm mb-2">
              <i className="fa-solid fa-envelope mr-2"></i> suiwise@Gmail.Com
            </a>
            <a href="#" className="block text-sm">
              <i className="fa-solid fa-location-dot mr-2"></i> Your address goes
              here.
            </a>
          </div>

          {/* Box 3 */}
          <div className="box text-white">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            {[
              { label: "About Us", href: "/aboutus.html" },
              { label: "Features", href: "/empowerchange.html" },
              { label: "Contact Us", href: "/contactus.html" },
              { label: "Help", href: "/login.html" },
              { label: "Support", href: "/register.html" },
              { label: "Terms & Conditions", href: "#" },
              { label: "Privacy Policy", href: "#" },
            ].map((link, idx) => (
              <a key={idx} href={link.href} className="block text-sm mb-2">
                <i className="fa-solid fa-arrow-right mr-2"></i> {link.label}
              </a>
            ))}
          </div>

          {/* Box 4 */}
          <div className="box text-white">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for latest updates</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 mb-4 rounded-md text-black"
            />
            <button className="w-full py-2 bg-slate-400 text-white rounded-md hover:bg-slate-500">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center text-white border-t border-gray-300 mt-6 pt-4">
          Copyright ©2024 All rights reserved
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;