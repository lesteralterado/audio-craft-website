import React from 'react';
import SwipeCards from './SwipeCards';
import ExampleWrapper from './SpringModal';

const Hero: React.FC = () => {
  return (
    <section className="hero-section text-white flex items-center justify-between p-8 bg-gray-900 min-h-screen">
      <div className="left-side w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-4">Elevate Your Events with Professional Audio and Visual Solutions</h1>
        <p className="text-lg mb-4">
          Transform your special occasions with our top-notch sound systems, stunning lights, and vibrant LED walls.
          Whether it's a wedding, birthday debut, disco party, or any other event, we provide the perfect setup to make your moments unforgettable.
        </p>
        {/* <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</button> */}
        <ExampleWrapper />
      </div>
      <div className="right-side w-1/2 bg-green-500">
        <SwipeCards />
      </div>
    </section>
  );
};

export default Hero;