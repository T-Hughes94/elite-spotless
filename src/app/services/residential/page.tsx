import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ResidentialPage() {
  return (
    <>
      <Header />

      {/* Hero Section Header */}
      <section
        className="relative pt-28 md:pt-10 pb-10 md:pb-16 h-[250px] md:h-[250px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/ecslogo.webp')" }} // Use an appropriate background image for the residential cleaning page
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}

        {/* Container for Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          
          {/* Hero Section Content Left-Aligned for Both Mobile and Desktop */}
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 flex flex-col justify-center h-full space-y-4">
            {/* Subtext "Residential Cleaning" */}
            <div className="flex items-center mb-2">
              <div className="h-1 w-16 bg-[#94c2d2]"></div>
              <span className="ml-4 text-lg font-medium text-white">Residential Cleaning</span>
            </div>

            {/* Hero Main Text */}
            <h2 className="text-3xl md:text-5xl font-bold text-white">Professional Residential Cleaning Services</h2>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto py-10 px-6">
        {/* Service Details Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-10">
          {/* Basic Cleaning */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic Cleaning - $60/hr per cleaner</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our basic house cleaning service is far from basic. We offer flexible scheduling options, including weekly, bi-weekly, or monthly services to suit your needs. Our general cleaning package covers tasks such as putting things in their proper places, sanitizing common areas, sweeping, vacuuming, dusting, mopping, and more. Every room will receive thorough attention, ensuring your home is left spotless with our meticulous attention to detail.
          </p>

          {/* Deep Cleaning */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Deep Cleaning - $80/hr per cleaner</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our deep cleaning service goes beyond the surface to provide an intensive sanitization process. We use specialized techniques and high-quality cleaning products to eliminate germs, bacteria, and allergens from your home. From kitchen appliances to bathroom fixtures, we ensure every corner is thoroughly cleaned and sanitized, leaving your home fresh and hygienic.
          </p>

          {/* Regular Maintenance */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Regular Maintenance - $60/hr per cleaner</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our regular maintenance program is designed to keep your home in pristine condition between deep cleaning sessions. With regular visits from our professional cleaning team, you can enjoy a consistently clean and organized living space. We tailor our maintenance services to meet your specific needs, ensuring your home always looks its best.
          </p>

          {/* Special Offer */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Double the Cleaning Power!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Take advantage of our special offer! When you schedule residential cleaning services with us, we'll send two cleaning specialists to your location. With two specialists working together, your cleaning will be completed in half the scheduled time, saving you time and ensuring exceptional results. Don't miss out on this opportunity to experience the convenience and efficiency of our double cleaning power!
          </p>

          <p className="text-sm text-red-500">
            *Please note that prices are subject to change based on your specific needs and competitive pricing.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Book Your Residential Cleaning?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Contact us today to schedule a cleaning or get a customized quote. We are here to provide top-notch cleaning solutions tailored to your needs!
          </p>
          <a
            href="/quote"
            className="inline-block bg-[#94c2d2] text-white font-bold py-3 px-6 rounded-md hover:bg-[#4a90e2] transition-colors duration-300"
          >
            Get a Quote
          </a>
        </section>
      </div>
      
      <Footer />
    </>
  );
}


