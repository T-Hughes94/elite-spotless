// app/services/post-construction/page.tsx
import Header from '../../components/Header';
import { FaHome, FaTruckMoving, FaTools } from 'react-icons/fa';


export default function PostConstructionPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#94c2d2] to-[#4a90e2] text-white p-8 rounded-lg shadow-lg mb-10">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <FaTools size={64} className="text-white" />
            <h1 className="text-4xl font-bold">Post Construction Cleaning</h1>
          </div>
          <p className="text-lg">
            Our post-construction cleaning service ensures that your space is spotless after any renovation or construction project. We offer flexible, around-the-clock availability to fit your schedule.
          </p>
        </section>

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
            className="inline-block bg-[#94c2d2] text-white font-bold py-3 px-6 rounded-md hover:bg-[#4a90e2] transition-colors duration-300"
          >
            Get a Quote
          </a>
        </section>
      </div>
    </>
  );
}
