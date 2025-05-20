import React from 'react';
import CuciSetrikaIcon from '../assets/CuciSetrika.png';
import CuciSajaIcon from '../assets/step2.png';
import SetrikaSajaIcon from '../assets/step3.png';

const ServiceCard = ({ title, icon, description }) => (
  <div className="bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-700 flex flex-col justify-start items-center space-y-6 min-h-[300px] max-w-[280px] mx-auto hover:bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 hover:scale-105 hover:shadow-2xl hover:-rotate-3 hover:translate-y-1 hover:skew-y-1 relative group perspective-1000">
  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-700 bg-blue-100 group-hover:bg-blue-500 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-blue-300">
    <img src={icon} alt={title} className="w-50 h-50 mx-auto" />
  </div>
  <div className="text-center">
    <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition-all duration-700">{title}</h3>
    <p className="text-gray-600 group-hover:text-gray-100 transition-all duration-700">{description}</p>
  </div>
  <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 group-hover:h-2 transition-all duration-700"></div>
</div>
);

const Services = () => {
  const services = [
    {
      title: 'Cuci Setrika',
      icon: CuciSetrikaIcon,
      description: 'Cuci dan setrika pakaian Anda dengan cepat dan bersih'
    },
    {
      title: 'Cuci Saja',
      icon: CuciSajaIcon,
      description: 'Cuci pakaian tanpa setrika'
    },
    {
      title: 'Setrika Saja',
      icon: SetrikaSajaIcon,
      description: 'Setrika pakaian Anda saja tanpa cuci'
    },
  ];

  return (
    <div id="services" className="py-20 bg-white-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
