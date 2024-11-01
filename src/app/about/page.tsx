import Header from '../components/Header';
import Image from 'next/image'; // Ensure the path to your image is correct
import temImage from '/public/emp22.jpg'; // Placeholder image, replace with an actual team photo
import { FaHandsHelping, FaMedal, FaUsers } from 'react-icons/fa';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />

      {/* About Header Section */}
      <section
        className="relative pt-28 md:pt-10 pb-10 md:pb-16 h-[250px] md:h-[250px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/ecslogo.webp')" }} // Use an appropriate background image for the about page
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}

        {/* Container for Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          
          {/* Hero Section Content Left-Aligned for Both Mobile and Desktop */}
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 flex flex-col justify-center h-full space-y-4">
            {/* Subtext "About Us" */}
            <div className="flex items-center mb-2">
              <div className="h-1 w-16 bg-[#94c2d2]"></div>
              <span className="ml-4 text-lg font-medium text-white">About Us</span>
            </div>

            {/* Hero Main Text */}
            <h2 className="text-3xl md:text-5xl font-bold text-white">Learn More About Our Journey</h2>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto py-16 px-6 mt-10 md:mt-16"> {/* Added margin top to separate sections */}
        {/* Core Values Section */}
        <section className="bg-white py-16 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Value 1 */}
            <div className="flex flex-col items-center">
              <FaHandsHelping className="text-[#94c2d2] text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Customer Commitment</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are dedicated to delivering exceptional service and strive to exceed our customers' expectations through unparalleled attention to detail and personalized solutions.
              </p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-center">
              <FaMedal className="text-[#94c2d2] text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Quality Excellence</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Quality is at the heart of everything we do. We use only the best products and maintain the highest standards to ensure spotless results every time.
              </p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-center">
              <FaUsers className="text-[#94c2d2] text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Teamwork</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team is our greatest asset. We work collaboratively, supporting one another to provide the best service possible and create a positive work environment.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#94c2d2] text-white py-16 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-extrabold text-center mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg leading-relaxed mb-4">
                "Elite Spotless Cleaning transformed my home! The team was professional, thorough, and left everything sparkling clean. Highly recommend their services!"
              </p>
              <p className="text-lg font-bold">- Jane Doe</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg leading-relaxed mb-4">
                "I am impressed with the attention to detail and the quality of service provided by Elite Spotless Cleaning. They exceeded my expectations!"
              </p>
              <p className="text-lg font-bold">- John Smith</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg leading-relaxed mb-4">
                "The team at Elite Spotless Cleaning is fantastic! They were prompt, efficient, and very friendly. My house has never looked better!"
              </p>
              <p className="text-lg font-bold">- Mary Johnson</p>
            </div>
          </div>
        </section>
      </div>
     
      <Footer />
    </>
  );
};

export default AboutPage;





