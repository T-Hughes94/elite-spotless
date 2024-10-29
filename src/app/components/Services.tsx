
import ServiceItem from './ServiceItem';
import { FaHome, FaTruckMoving, FaTools } from 'react-icons/fa'; // Import your icons

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#94c2d2]">
      <div className="container mx-auto px-6">
        {/* Header and Quick Description */}
        <div className="text-center mb-40">
          <h2 className="text-5xl font-extrabold text-gray-100 mb-8 underline">
            NYC Cleaning Services
          </h2>
          <p className="px-4 text-xl font-bold text-gray-950 max-w-4xl mx-auto">
            At Elite Spotless Cleaning, we offer a wide range of professional cleaning services to suit all your needs. Whether you're moving in or out, need regular maintenance, or post-construction cleanup, our expert team is here to provide exceptional results.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceItem 
            icon={<FaHome size={64} />} // Increased icon size
            title="Residential Cleaning" 
            route="/services/residential" // Nested route
          />
          <ServiceItem 
            icon={<FaTruckMoving size={64} />} // Increased icon size
            title="Move Out Cleaning" 
            route="/services/move-out" // Nested route
          />
          <ServiceItem 
            icon={<FaTools size={64} />} // Increased icon size
            title="Post Construction Cleaning" 
            route="/services/post-construction" // Nested route
          />
        </div>
      </div>
    </section>
  );
};

export default Services;


