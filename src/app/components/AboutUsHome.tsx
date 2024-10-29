// app/components/AboutUsHomeEnhanced.tsx
import Image from 'next/image';
import cityImage from '/public/newyork.png'; // Ensure the path to your image is correct

const AboutUsHome = () => {
  return (
    <section id="about" className="relative py-16 bg-gradient-to-r from-white to-gray-100">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Image Section with Wooden Frame Effect */}
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
          {/* Outer Frame */}
          <div className="relative p-4 bg-[#8B4513] rounded-lg shadow-2xl" style={{ border: '12px solid #A0522D' }}>
            {/* Inner Frame */}
            <div className="border-4 border-[#D2B48C] rounded-md overflow-hidden">
              <Image
                src={cityImage}
                alt="New York City"
                className="rounded-md transform hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Elite Spotless Cleaning, we provide exceptional cleaning solutions that are of the highest quality and affordable for our customers. We take pride in the unwavering dedication and hard work exhibited by our team, understanding the individual needs of each customer, and guaranteeing your satisfaction with remarkable outcomes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our principles revolve around building trust and forging lasting relationships with our valued clients. We achieve this through maintaining transparency and demonstrating a commitment to excellence. Our ultimate goal is to exceed expectations while delivering service that creates a lasting impact on every single client we have the privilege to serve.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Together, we can transform your home into a pristine sanctuary where serenity and cleanliness reign supreme.
          </p>
          {/* Button */}
          <a
            href="/about"
            className="inline-block mt-4 px-8 py-3 bg-[#94c2d2] text-white font-bold rounded-full shadow-md hover:bg-[#4a90e2] transition-colors duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;




