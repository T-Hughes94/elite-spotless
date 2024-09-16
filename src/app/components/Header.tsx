"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/legacy/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State to manage dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Add specific type for ref

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#94c2d2] text-white shadow-lg sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Company Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/ecslogo.png"
            alt="Mock-Up Construction Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="text-2xl font-bold">Elite Spotless Cleaning</div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-900 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors duration-300">
            About
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center hover:text-gray-900 transition-colors duration-300 focus:outline-none"
            >
              Services
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link href="/services/residential" className="block px-4 py-2 hover:bg-gray-200">
                  Residential
                </Link>
                <Link href="/services/post-construction" className="block px-4 py-2 hover:bg-gray-200">
                  Post Construction
                </Link>
                <Link href="/services/move-out" className="block px-4 py-2 hover:bg-gray-200">
                  Move Out
                </Link>
              </div>
            )}
          </div>
          <Link href="/quote" className="hover:text-gray-900 transition-colors duration-300">
            Get a Quote
          </Link>
          <Link href="/contact" className="hover:text-gray-900 transition-colors duration-300">
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#94c2d2]">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-600">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-600">
            About
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="bg-[#94c2d2]">
                <Link href="/services/residential" className="block px-6 py-2 hover:bg-gray-500">
                  Residential
                </Link>
                <Link href="/services/post-construction" className="block px-6 py-2 hover:bg-gray-500">
                  Post Construction
                </Link>
                <Link href="/services/move-out" className="block px-6 py-2 hover:bg-gray-500">
                  Move Out
                </Link>
              </div>
            )}
          </div>
          <Link href="/quote" className="block px-4 py-2 hover:bg-gray-600">
            Get a Quote
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-600">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
