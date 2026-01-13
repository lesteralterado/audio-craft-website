import React from 'react';
import SwipeCards from './SwipeCards';
import ExampleWrapper from './SpringModal';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero-section text-white flex items-center justify-center p-8 min-h-screen pt-20 relative"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dhxi75eld/image/upload/v1767925307/Untitled_500_x_500_px_2_b9wcwv.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `https://res.cloudinary.com/dhxi75eld/image/upload/v1767925307/Untitled_500_x_500_px_2_b9wcwv.png`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // y: backgroundY,
        }}
      >

      </motion.div>
      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Elevate Your Events with Professional Audio and Visual Solutions
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform your special occasions with our top-notch sound systems, stunning lights, and vibrant LED walls.
          Whether it's a wedding, birthday debut, disco party, or any other event, we provide the perfect setup to make your moments unforgettable.
        </motion.p>
        <ExampleWrapper />
        <div className="mt-8">
          <iframe
            width="640"
            height="480"
            src="https://sketchfab.com/playlists/embed?collection=811a81724dd343059f50629a6e68ef19&autostart=0"
            title="lighting stuff"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
          ></iframe>
          <p style={{ fontFamily: 'sans-serif', fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
            <a href="https://sketchfab.com/pacmandave8/collections/lighting-stuff-811a81724dd343059f50629a6e68ef19" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>lighting stuff</a>
            by <a href="https://sketchfab.com/pacmandave8" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>DavidMTheExistant</a>
            on <a href="https://sketchfab.com?utm_source=website&utm_medium=embed&utm_campaign=share-popup" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>Sketchfab</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;