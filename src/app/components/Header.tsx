"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/legacy/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for the mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the desktop dropdown

  // Function to handle navigation and close menus
  const handleNavigateAndClose = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-[#94c2d2] text-white shadow-lg sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Company Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/ecslogo.webp"
            alt="Elite Spotless Cleaning Logo"
            width={50}
            height={50}
            className="rounded-full"
            loading="lazy"
          />
          <div className="text-2xl font-bold">Elite Spotless Cleaning</div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-black transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-black transition-colors duration-300">
            About
          </Link>

          {/* Services Dropdown for Desktop */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-black transition-colors duration-300 focus:outline-none"
            >
              Services
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu for Desktop */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-md border border-gray-200">
                <Link href="/services/residential" className="block px-4 py-3 hover:bg-gray-100" onClick={handleNavigateAndClose}>
                  Residential
                </Link>
                <Link href="/services/post-construction" className="block px-4 py-3 hover:bg-gray-100" onClick={handleNavigateAndClose}>
                  Post Construction
                </Link>
                <Link href="/services/move-out" className="block px-4 py-3 hover:bg-gray-100" onClick={handleNavigateAndClose}>
                  Move Out
                </Link>
              </div>
            )}
          </div>

          <Link href="/quote" className="hover:text-black transition-colors duration-300">
            Get a Quote
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors duration-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#94c2d2] px-4 py-6">
          {/* Home Link */}
          <Link href="/" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={handleNavigateAndClose}>
            Home
          </Link>

          {/* About Link */}
          <Link href="/about" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={handleNavigateAndClose}>
            About
          </Link>

          {/* Services Dropdown with Individual Links */}
          <div className="border-b border-gray-300 mb-4 pb-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="px-2">
                <Link href="/services/residential" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md" onClick={handleNavigateAndClose}>
                  Residential
                </Link>
                <Link href="/services/post-construction" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md" onClick={handleNavigateAndClose}>
                  Post Construction
                </Link>
                <Link href="/services/move-out" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md" onClick={handleNavigateAndClose}>
                  Move Out
                </Link>
              </div>
            )}
          </div>

          {/* Get a Quote Link */}
          <Link href="/quote" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={handleNavigateAndClose}>
            Get a Quote
          </Link>

          {/* Contact Link */}
          <Link href="/contact" className="block px-4 py-3 text-white hover:bg-gray-500 rounded-md font-bold" onClick={handleNavigateAndClose}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;













