// src/app/components/Hero.tsx

"use client";

import Link from 'next/link';
import Image from 'next/image';
import ecslogo from '/public/ecslogo.png'; // Ensure the path to your logo is correct

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${ecslogo.src})`,
          backgroundAttachment: 'fixed', // This creates the parallax effect
        }}
      ></div>

      {/* Lightened Overlay */}
      <div className="absolute inset-0 bg-black/40"></div> {/* Reduced opacity to 40% */}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start text-white">
        {/* Logo and Title */}
        <div className="mb-8">
          <h1 className="text-6xl text-center font-bold leading-tight underline decoration-[#94c2d2]">
            Elite Spotless Cleaning
          </h1>
          <p className="mt-4 text-2xl font-bold max-w-2xl">
            Elite Spotless Cleaning offers a unique and unparalleled service. Our primary focus is on exceeding our clients' expectations by consistently going the extra mile for you.
          </p>
          <p className="mt-6 text-2xl font-bold max-w-2xl">
            As a well-established and highly skilled cleaning service provider, we pride ourselves on delivering exceptional customer service and top-tier cleaning solutions in the New York City Region.
          </p>
        </div>

        {/* Quote Button */}
        <Link href="/quote">
          <button className="mt-6 bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-md hover:bg-[#94c2d2] transition-transform transform hover:scale-105">
            Get a Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;




