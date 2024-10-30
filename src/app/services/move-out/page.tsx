import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaTruckMoving } from 'react-icons/fa';
import Link from 'next/link';

export default function MoveOutPage() {
  return (
    <>
      <Header />

      {/* Hero Section Header */}
      <section
        className="relative pt-28 md:pt-10 pb-10 md:pb-16 h-[250px] md:h-[250px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/ecslogo.webp')" }} // Use an appropriate background image for the move-out cleaning page
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}

        {/* Container for Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          
          {/* Hero Section Content Left-Aligned for Both Mobile and Desktop */}
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 flex flex-col justify-center h-full space-y-4">
            {/* Subtext "Move Out Cleaning" */}
            <div className="flex items-center mb-2">
              <div className="h-1 w-16 bg-[#94c2d2]"></div>
              <span className="ml-4 text-lg font-medium text-white">Move Out Cleaning</span>
            </div>

            {/* Hero Main Text */}
            <h2 className="text-3xl md:text-5xl font-bold text-white">Professional Move Out Cleaning Services</h2>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto py-10 px-6">
        {/* Service Details Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Move Out Cleaning - $70/hr per cleaner</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our move-out cleaning services are tailored to the specific needs of relocating in New York City. We understand the overwhelming nature of relocation here. Whether you're moving to a new home or preparing to leave your current one, our professional cleaners will leave your space looking pristine.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Moving Out Services</h3>
          <p className="text-lg text-gray-700 mb-4">
            When moving out, it's essential to leave your property in top condition to secure your security deposit or impress potential buyers. Our comprehensive move-out cleaning services include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Thorough cleaning of all rooms</li>
            <li>Deep cleaning of kitchen appliances</li>
            <li>Scrubbing and sanitizing bathrooms</li>
            <li>Dusting and wiping down surfaces</li>
            <li>Cleaning interior windows and mirrors</li>
            <li>Vacuuming and mopping floors</li>
            <li>Removing trash and debris</li>
            <li>Attention to commonly overlooked areas</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Moving In Service - $70/hr per cleaner</h3>
          <p className="text-lg text-gray-700 mb-4">
            When moving into a new home, it's important to start with a clean slate. Our move-in cleaning services ensure that your new space is thoroughly cleaned and ready for you to settle in comfortably. Our move-in cleaning services include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Deep cleaning of kitchen appliances</li>
            <li>Sanitizing bathrooms</li>
            <li>Wiping down surfaces</li>
            <li>Cleaning interior windows and mirrors</li>
            <li>Vacuuming and mopping floors</li>
            <li>Dusting and wiping down surfaces</li>
            <li>Attention to commonly overlooked areas</li>
          </ul>

          <p className="text-lg text-gray-700">
            You can trust us to provide exceptional move-in and move-out cleaning services for your home in New York City.
          </p>
          <p className="text-sm text-red-500 mt-4">
            *Please note that prices are subject to change based on your specific needs and competitive pricing.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Book Your Move Out Cleaning?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Contact us today to schedule a cleaning or get a customized quote. We are here to make your moving experience smoother and hassle-free!
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[#94c2d2] text-white font-bold py-3 px-6 rounded-md border border-white hover:bg-white hover:text-[#94c2d2] hover:border-[#94c2d2] transition-colors duration-300"
          >
            Get a Quote
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}




