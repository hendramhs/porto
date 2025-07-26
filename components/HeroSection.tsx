"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cream-100 rounded-full opacity-30 animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cream-100 rounded-full opacity-50 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cream-100 rounded-full opacity-40 animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="text-sm text-gray-400 mb-2 tracking-wider">
              WEB DEVELOPMENT / UI DESIGN / STUDENT
            </div>
            <h1 className="text-6xl lg:text-8xl font-serif font-bold text-gradient leading-tight">
              HENDRA
              <br />
              DARMAWAN
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right lg:text-left"
          >
            <div className="text-sm text-gray-400 mb-4 font-light tracking-wide">
              作品集
              <br />
              PORTFOLIO
            </div>
          </motion.div>
        </div>

        {/* Right Content - Moon/Sphere */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="w-80 h-80 lg:w-96 lg:h-96 moon-gradient rounded-full animate-float shadow-2xl">
              {/* Moon surface details */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-gray-300 rounded-full opacity-20" />
                <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gray-400 rounded-full opacity-15" />
                <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gray-300 rounded-full opacity-25" />
                <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-gray-400 rounded-full opacity-20" />
                <div className="absolute top-1/6 right-1/2 w-10 h-10 bg-gray-300 rounded-full opacity-10" />
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-cream-100 opacity-10 blur-xl animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 right-12 text-right text-sm text-gray-400 max-w-md hidden lg:block"
      >
        <p className="leading-relaxed">
          Saya Hendra Darmawan, seorang mahasiswa yang passionate dalam
          pengembangan web. Saya menggabungkan pemikiran logis dan intuitif,
          fungsi dan emosi, untuk menciptakan pengalaman digital yang memenuhi
          kebutuhan pengguna.
        </p>
      </motion.div>

      {/* Scroll Indicator */}
    </section>
  );
};

export default HeroSection;
