import Header from '../components/Header';
import QuoteForm from '../components/QuoteForm'; // Assuming the form is in this component
import Footer from '../components/Footer';

export default function QuotePage() {
  return (
    <>
      <Header />

      {/* Quote Header Section */}
      <section
        className="relative pt-28 md:pt-10 pb-10 md:pb-16 h-[250px] md:h-[250px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/ecslogo.webp')" }} // Use an appropriate background image for the quote page
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}

        {/* Container for Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          
          {/* Hero Section Content Left-Aligned for Both Mobile and Desktop */}
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 flex flex-col justify-center h-full space-y-4">
            {/* Subtext "Request a Quote" */}
            <div className="flex items-center mb-2">
              <div className="h-1 w-16 bg-[#94c2d2]"></div>
              <span className="ml-4 text-lg font-medium text-white">Request a Quote</span>
            </div>

            {/* Hero Main Text */}
            <h2 className="text-3xl md:text-5xl font-bold text-white">Get Your Cleaning Quote Today</h2>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Quote Request Form</h3>
            <p className="text-center text-xl font-bold text-gray-700 mb-2">
              Please provide the necessary details below, and we will provide you with a customized quote based on your requirements.
            </p>
            <QuoteForm /> {/* Directly use the quote form component here */}
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section className="py-12 bg-[#94c2d2]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-semibold text-white mb-4">Thank You for Considering Elite Spotless Cleaning!</h3>
          <p className="text-white text-lg max-w-2xl mx-auto">
            We appreciate your interest in our services and the opportunity to assist you with your cleaning needs.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}


