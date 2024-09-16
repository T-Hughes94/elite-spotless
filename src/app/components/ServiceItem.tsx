import React, { FC } from 'react';
import Link from 'next/link';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  route: string;
}

const ServiceItem: FC<ServiceItemProps> = ({ icon, title, route }) => {
  return (
    <Link href={route}>
      <div
        className="relative pt-16 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl overflow-visible"
        style={{ minHeight: '275px' }} // Ensure a minimum height for consistency
      >
        {/* Icon positioned halfway out of the card */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#94c2d2] rounded-full p-5 shadow-md border-2 border-white">
          {icon}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full mt-5 text-gray-950">
          <h3 className="text-3xl py-6 font-bold mb-4 underline decoration-[#94c2d2]">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;


