import { motion } from 'framer-motion';
import { useState } from 'react';

const IntroLanding = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleExplore = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
    >
      {/* Premium Corporate Background Images */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-22"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/25 via-indigo-900/20 to-slate-900/40"></div>

      {/* Animated Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
        className="absolute top-20 left-20 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center"
      >
        <div className="w-12 h-12 border border-purple-300/30 rounded-full"></div>
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, delay: 1 }
        }}
        className="absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-lg rotate-45 flex items-center justify-center"
      >
        <div className="w-8 h-8 border border-blue-300/30 rounded rotate-45"></div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`
          }}
        />
      ))}

      {/* Main Content - Perfectly Centered */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">

        {/* Logo Section */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-16"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0.1)",
                "0 0 0 20px rgba(255, 255, 255, 0)",
                "0 0 0 0 rgba(255, 255, 255, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-48 h-48 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center relative overflow-hidden"
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl font-black text-white relative z-10"
            >
              AC
            </motion.span>
            <motion.div
              animate={{
                scale: [0, 1.2, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
              className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle animated background */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-50"
          />
          {/* Company Name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Welcome to Arvish Consulting
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl font-light text-purple-200 mb-8"
          >
            Innovate • Integrate • Inspire
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We are a premier consulting firm dedicated to transforming businesses through
            innovative technology solutions, strategic integration, and inspiring digital experiences
            that drive sustainable growth and competitive advantage.
          </motion.p>

          {/* Premium CTA Button */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
            className="group relative bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 text-white font-bold px-16 py-6 rounded-full shadow-2xl transition-all duration-500 flex items-center gap-4 mx-auto overflow-hidden border-2 border-white/20"
          >
            {/* Premium Shine Animation */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />

            {/* Premium Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm"></div>

            {/* Premium Border Glow */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

            <span className="relative z-10 font-extrabold text-lg tracking-wider">Explore Our Company</span>

            <motion.svg
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>

            {/* Premium Sparkle Effects */}
            <motion.div
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
            />
            <motion.div
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 2.5
              }}
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg"
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroLanding;
