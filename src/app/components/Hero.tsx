"use client";

import Link from 'next/link';
import Image from 'next/image';
import ecslogo from '/public/ecslogo.webp'; // Use the optimized WebP image

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={ecslogo}
          alt="Elite Spotless Cleaning Background"
          fill // Replaces layout="fill"
          style={{ objectFit: 'cover' }} // Replaces objectFit prop
          quality={75} // Set image quality to optimize performance
          priority // Ensures the image is loaded with high priority
        />
      </div>

      {/* Lightened Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start text-white">
        <div className="mb-8">
          <h1 className="text-6xl font-bold leading-tight underline decoration-[#94c2d2]">
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
          <button className="mt-6 bg-[#94c2d2] text-white px-8 py-3 border border-white rounded-md text-md hover:bg-white hover:text-[#94c2d2] hover:border-[#94c2d2] transition-transform transform hover:scale-105">
            Get a Quote
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;







