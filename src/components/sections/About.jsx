import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 lg:py-48 bg-[#0a0a0b] overflow-hidden"
    >
      {/* Background accent */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#64ffda]/[0.02] to-transparent"
        style={{ opacity }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left - Section Label (Asymmetric) */}
          <motion.div 
            className="lg:col-span-4"
            style={{ y }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-[#64ffda] font-mono tracking-widest uppercase">
                01 / About
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
                Building the
                <span className="block text-white/30">digital future</span>
              </h2>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mt-8 px-4 py-2 bg-white/[0.03] border border-white/[0.05] rounded-full"
            >
              <MapPin size={14} className="text-[#64ffda]" />
              <span className="text-sm text-white/50">{personalInfo.location}</span>
            </motion.div>
          </motion.div>

          {/* Right - Bio Content */}
          <motion.div 
            className="lg:col-span-8 lg:pl-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Bio Text */}
            <div className="relative">
              <div className="absolute -left-6 top-0 w-px h-full bg-gradient-to-b from-[#64ffda]/50 to-transparent hidden lg:block" />
              
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-[#64ffda]/20 transition-all duration-500"
                >
                  <Code2 className="w-8 h-8 text-[#64ffda] mb-4" />
                  <h3 className="text-white font-medium mb-2">MERN Specialist</h3>
                  <p className="text-sm text-white/40">
                    Expertise in MongoDB, Express.js, React.js & Node.js for full-stack development
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-[#64ffda]/20 transition-all duration-500"
                >
                  <Sparkles className="w-8 h-8 text-[#64ffda] mb-4" />
                  <h3 className="text-white font-medium mb-2">Performance Focused</h3>
                  <p className="text-sm text-white/40">
                    Delivering optimized applications with measurable improvements & clean architecture
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;