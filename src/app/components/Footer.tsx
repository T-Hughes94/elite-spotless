// src/app/components/Footer.tsx

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="relative bg-fixed bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('/ecslogo.png')" }} // Use an appropriate background image for the footer
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        
        {/* Contact Information */}
        <div className="md:col-span-1 flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="mb-1">info@elitespotlesscleaning.com</p>
          <p className="mb-1">(123) 456-7890</p>
        </div>

        {/* Address Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Our Address</h3>
          <p>5678 Clean St</p>
          <p>New York City, NY 10001</p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#94c2d2] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#94c2d2] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#94c2d2] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#94c2d2] transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:text-[#94c2d2] transition-colors">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#94c2d2] transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#94c2d2] transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#94c2d2] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#94c2d2] transition-colors">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright Section */}
      <div className="container mx-auto px-6 md:px-12 mt-4 text-center text-white text-lg">
        <p>&copy; {new Date().getFullYear()} Elite Spotless Cleaning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
