import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen bg-gray-900 overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        style={{ y: textY }}
        className="font-bold text-white relative z-10 text-4xl md:text-6xl mb-4"
      >
        Elevate Your Events with Professional Audio and Visual Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        style={{ y: textY }}
        className="text-lg md:text-xl mb-8"
      >
        Transform your special occasions with our top-notch sound systems, stunning lights, and vibrant LED walls.
          Whether it's a wedding, birthday debut, disco party, or any other event, we provide the perfect setup to make your moments unforgettable.
      </motion.p>
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.75}}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dhxi75eld/image/upload/v1767927480/Untitled_design_7_e6zvgi.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.75 }}
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url()`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75 }}
        className="absolute bottom-0 right-0 z-20 w-50 h-50"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dhxi75eld/image/upload/v1767927695/Untitled_500_x_500_px_3_mscood.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
