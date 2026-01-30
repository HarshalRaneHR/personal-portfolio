import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Terminal, Download } from "lucide-react";
import { personalInfo, stats } from "../../data/mock";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-portfolio-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--portfolio-accent)]/5 rounded-full blur-[120px]"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-portfolio-accent-secondary/5 rounded-full blur-[100px]"
          style={{ y: y2 }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(var(--portfolio-border)_1px,transparent_1px),linear-gradient(90deg,var(--portfolio-border)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content - Asymmetric */}
          <motion.div className="lg:col-span-7 lg:pr-12" style={{ y: y2 }}>
            {/* Intro Tag */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Terminal size={14} className="text-portfolio-accent" />
              <span className="text-sm text-portfolio-accent font-mono tracking-wider">
                Software Developer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-portfolio-text leading-[0.9] mb-6"
            >
              <span className="block">Harshal</span>
              <span className="block text-portfolio-text-subtle">Rane</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl text-portfolio-text-muted max-w-lg leading-relaxed mb-10"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="group px-6 py-3 bg-portfolio-accent text-portfolio-bg font-medium rounded transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-portfolio-text-subtle text-portfolio-text-muted hover:border-portfolio-accent/50 hover:text-portfolio-accent rounded transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Harshal_Rane_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 border border-portfolio-border text-portfolio-text-muted hover:border-portfolio-text-subtle hover:text-portfolio-text rounded transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card (Offset) */}
          {/* <motion.div
            className="lg:col-span-5 lg:mt-24"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              y: y1,
              x: mousePosition.x,
              rotateX: mousePosition.y * 0.1,
              rotateY: mousePosition.x * 0.1,
            }}
          >
            <div className="relative">
              <div className="absolute -left-8 top-0 w-px h-full bg-gradient-to-b from-portfolio-accent/50 via-portfolio-accent/20 to-transparent" />

              <div className="bg-portfolio-card-bg backdrop-blur-sm border border-portfolio-border rounded-2xl p-8">
                <p className="text-xs text-portfolio-text-subtle uppercase tracking-widest mb-6 font-mono">
                  Impact Metrics
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="group"
                    >
                      <p className="text-3xl lg:text-4xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors duration-300">
                        {stat.value}
                      </p>
                      <p className="text-xs text-portfolio-text-subtle mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-portfolio-text-subtle uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown size={16} className="text-portfolio-text-subtle" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
