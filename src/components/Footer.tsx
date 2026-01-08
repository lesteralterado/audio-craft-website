import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Audio Craft</h3>
            <p className="text-gray-400">
              Elevating events with professional sound systems, lights, and LED walls.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sound Systems</li>
              <li>Lighting</li>
              <li>LED Walls</li>
              <li>Event Coordination</li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Events</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Weddings</li>
              <li>Birthdays</li>
              <li>Debuts</li>
              <li>Disco Parties</li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Facebook: AudioCraft Lights and Sounds</p>
            <p className="text-gray-400">Phone: +63 991 206 0266</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Audio Craft. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;