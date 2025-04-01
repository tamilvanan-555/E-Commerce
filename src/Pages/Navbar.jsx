import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import Logo from "../assets/Logo1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".profile-menu")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo - Fully Responsive */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full" />
          <span className="text-base sm:text-lg md:text-xl font-bold text-black tracking-wide">
            Lehenga Zone
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
          <li><Link to="/collection" className="hover:text-blue-500 transition">Collection</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1">
            <FiSearch className="text-gray-600 w-5 h-5 mr-2" />
            <input type="text" placeholder="Search..." className="bg-transparent outline-none w-48" />
          </div>

          {/* Cart Icon */}
          <Link to='/cart' className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FiShoppingCart className="text-gray-600 w-5 h-5" />
          </Link>

          {/* User Profile Dropdown */}
          <div className="relative profile-menu">
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <FiUser className="text-gray-600 w-5 h-5 cursor-pointer" />
            </button>
            
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md" onClick={() => setProfileOpen(false)}>
                <Link to="/profile" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Profile</Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Orders</Link>
                <Link to="/login" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Login</Link>
                <Link to="/logout" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Logout</Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="px-6">
            {/* Mobile Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mb-4">
              <FiSearch className="text-gray-600 w-5 h-5 mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent outline-none w-full" />
            </div>
            
            {/* Mobile Navigation Links */}
            <ul className="space-y-4 text-center text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
              <li><Link to="/" className="block py-2 hover:text-blue-500">Home</Link></li>
              <li><Link to="/collection" className="block py-2 hover:text-blue-500">Collection</Link></li>
              <li><Link to="/about" className="block py-2 hover:text-blue-500">About</Link></li>
              <li><Link to="/contact" className="block py-2 hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}


