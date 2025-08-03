import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "4", label: "Expert Team" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section id="home" className="relative min-h-screen gradient-bg overflow-hidden flex items-center">
      {/* Floating Geometric Shapes */}
      <motion.div
        className="floating-shape w-32 h-32 bg-white rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "20%", left: "10%" }}
      />
      <motion.div
        className="floating-shape w-24 h-24 bg-white rounded-lg"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ top: "60%", right: "15%" }}
      />
      <motion.div
        className="floating-shape w-16 h-16 bg-white rounded-full"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{ bottom: "30%", left: "20%" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=400"
            alt="Professional Indian business team in enterprise setting"
            className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl mb-12 opacity-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert DevOps, Cloud & AI Solutions
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From Startups to Enterprise – We Scale Your Technology Infrastructure
          </motion.p>

          <motion.p
            className="text-lg text-white/80 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            1+ Years Experience | 4 Expert Team Members | India's Premier Technology Partners
          </motion.p>

          {/* Statistics Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
            >
              Schedule Free Consultation
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#portfolio")}
            >
              View Our Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
