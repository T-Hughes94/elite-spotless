// app/services/move-out/page.tsx
import Header from '../../components/Header';
import { FaTruckMoving } from 'react-icons/fa';
import Footer from '../../components/Footer';

export default function MoveOutPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#94c2d2] to-[#4a90e2] text-white p-8 rounded-lg shadow-lg mb-10">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <FaTruckMoving size={64} className="text-white" />
            <h1 className="text-4xl font-bold">Move Out Cleaning</h1>
          </div>
          <p className="text-lg">
            Moving can be overwhelming, but our move-out cleaning services make it easier by leaving your space spotless and ready for the next chapter.
          </p>
        </section>

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
          <a
            href="/quote"
            className="inline-block bg-[#94c2d2] text-white font-bold py-3 px-6 rounded-md hover:bg-[#4a90e2] transition-colors duration-300"
          >
            Get a Quote
          </a>
        </section>
      </div>
    <Footer/>
    </>
  );
}
