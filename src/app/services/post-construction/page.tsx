import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaTools } from 'react-icons/fa';

export default function PostConstructionPage() {
  return (
    <>
      <Header />

      {/* Hero Section Header */}
      <section
        className="relative pt-28 md:pt-10 pb-10 md:pb-16 h-[250px] md:h-[250px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/ecslogo.webp')" }} // Use an appropriate background image for the post-construction cleaning page
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}

        {/* Container for Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          
          {/* Hero Section Content Left-Aligned for Both Mobile and Desktop */}
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 flex flex-col justify-center h-full space-y-4">
            {/* Subtext "Post Construction Cleaning" */}
            <div className="flex items-center mb-2">
              <div className="h-1 w-16 bg-[#94c2d2]"></div>
              <span className="ml-4 text-lg font-medium text-white">Post Construction Cleaning</span>
            </div>

            {/* Hero Main Text */}
            <h2 className="text-3xl md:text-5xl font-bold text-white">Post Construction Cleaning Services</h2>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto py-10 px-6">
        {/* Service Details Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Construction Cleaning - $65/hr per cleaner</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our post-construction cleaning service ensures your space is spotless after any renovation or construction project. We offer flexible, around-the-clock availability to fit your schedule. Our services include:
          </p>

          {/* Service List */}
          <ul className="list-disc pl-5 text-lg text-gray-700 mb-6">
            <li>Dusting and wiping all surfaces</li>
            <li>Cleaning windows, mirrors, and glass</li>
            <li>Removing paint, caulking, and adhesive residues</li>
            <li>Vacuuming carpets and mopping floors</li>
            <li>Cleaning light fixtures, vents, and HVAC systems</li>
            <li>Polishing fixtures and appliances</li>
            <li>Disposing of construction debris</li>
          </ul>

          <p className="text-lg text-gray-700 mb-6">
            We tailor our services to meet your specific needs, ensuring complete satisfaction and a pristine environment.
          </p>
          <p className="text-sm text-red-500">
            *Please note that prices are subject to change based on your specific needs and competitive pricing.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Post Construction Cleaning?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Contact us today to schedule your cleaning or get a customized quote. Our expert team is here to help make your space move-in ready!
          </p>
          <a
            href="/quote"
            className="inline-block bg-[#94c2d2] text-white font-bold py-3 px-6 border border-white rounded-md hover:border-[#94c2d2] transition-colors duration-300"
          >
            Get a Quote
          </a>
        </section>
      </div>
      
      <Footer />
    </>
  );
}

