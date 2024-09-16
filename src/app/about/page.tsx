// app/about/page.tsx
import Header from '../components/Header';
import Image from 'next/image'; // Ensure the path to your image is correct
import teamImage from '/public/emp2.jpg'; // Placeholder image, replace with an actual team photo
import { FaHandsHelping, FaMedal, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-16 px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Elite Spotless Cleaning</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Welcome to Elite Spotless Cleaning, where we provide top-notch cleaning services tailored to meet your needs. With a passion for excellence, we ensure every space is transformed into a pristine sanctuary.
          </p>
        </section>

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

        {/* Team Section */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-16">
          {/* Team Image */}
          <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={teamImage}
              alt="Our Team"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
              width={600}
              height={400}
            />
          </div>

          {/* Team Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At the core of Elite Spotless Cleaning is a group of dedicated professionals who are passionate about providing exceptional service. Our team members are highly trained and take pride in their work, ensuring every job is done to perfection.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We believe in fostering a positive work environment where every team member feels valued and empowered to deliver their best. This approach not only benefits our team but also ensures that our clients receive the highest level of service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              From our front-line cleaners to our management team, every member of Elite Spotless Cleaning is committed to our mission of excellence and customer satisfaction.
            </p>
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
    </>
  );
};

export default AboutPage;
