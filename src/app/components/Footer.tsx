// src/app/components/Footer.tsx

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="relative bg-fixed bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('/ecslogo.webp')" }} // Use an appropriate background image for the footer
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        
        {/* Contact Information */}
        <div className="md:col-span-1 flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <Link href="mailto:ecsnyc2024@gmail.com" className="text-2xl hover:text-[#94c2d2] transition-colors">ecsnyc2024@gmail.com <FaEnvelope/></Link>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-lg hover:text-[#94c2d2] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-[#94c2d2] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services/residential" className="text-lg hover:text-[#94c2d2] transition-colors">
                Residential
              </Link>
            </li>
            <li>
              <Link href="/services/post-construction" className="text-lg hover:text-[#94c2d2] transition-colors">
                Post Construction
              </Link>
            </li>
            <li>
              <Link href="/services/move-out" className="text-lg hover:text-[#94c2d2] transition-colors">
                Move Out/ Move In
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:text-[#94c2d2] transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/quote" className="text-lg hover:text-[#94c2d2] transition-colors">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
      
            <Link href="https://www.instagram.com/elitespotlesscleaningllc/" target="_blank" rel="noopener noreferrer" className="hover:text-[#94c2d2] transition-colors">
              <FaInstagram size={50} />
            </Link>
            
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright Section */}
      <div className="container mx-auto px-6 md:px-12 mt-4 text-center text-gray-900 text-lg">
        <p>&copy; {new Date().getFullYear()} Elite Spotless Cleaning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
