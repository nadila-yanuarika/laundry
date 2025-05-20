import React from 'react';
import PickupIcon from '../assets/step1.png';
import WashDryIcon from '../assets/step2.png';
import FoldIcon from '../assets/step3.png';
import DeliveryIcon from '../assets/step4.png';

const StepCard = ({ number, title, icon }) => (
  <div className="bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 flex flex-col justify-start items-center space-y-6 min-h-[300px] max-w-[280px] mx-auto hover:bg-blue-50">
    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-colors duration-500 bg-blue-100 hover:bg-blue-500">
      <img src={icon} alt={title} className="w-50 h-50" />
    </div>
    <div className="text-center">
      <div className="text-blue-600 font-bold text-lg mb-1">STEP {number}</div>
      <div className="text-gray-800 text-xl font-semibold">{title}</div>
    </div>
  </div>
);

const Steps = () => {
  const steps = [
    { number: 1, title: 'Pickup', icon: PickupIcon },
    { number: 2, title: 'Wash & Dry', icon: WashDryIcon },
    { number: 3, title: 'Fold', icon: FoldIcon },
    { number: 4, title: 'Delivery', icon: DeliveryIcon },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-100 py-10">
      <div className="container mx-auto px-4">

        <p className="text-md text-center mb-2 text-blue-500 font-medium tracking-widest">HOW IT WORKS</p>

        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Get it done in 4 steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
