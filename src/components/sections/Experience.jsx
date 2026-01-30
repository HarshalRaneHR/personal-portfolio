import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experience } from '../../data/mock';

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative py-32 lg:py-48 bg-[#0a0a0b] overflow-hidden"
    >
      {/* Background accent */}
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#3b82f6]/[0.03] rounded-full blur-[150px]"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-[#64ffda] font-mono tracking-widest uppercase">
              03 / Experience
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Where I've
              <span className="block text-white/30">made impact</span>
            </h2>
          </motion.div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Decorative line */}
              <div className="absolute -left-6 lg:-left-12 top-0 w-px h-full bg-gradient-to-b from-[#64ffda]/50 via-[#64ffda]/20 to-transparent" />
              
              {/* Card */}
              <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 lg:p-12 hover:border-[#64ffda]/20 transition-all duration-500">
                {/* Top Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] text-xs font-mono rounded-full mb-4"
                    >
                      <Briefcase size={12} />
                      Current Role
                    </motion.div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-white/60">{exp.company}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2 text-sm text-white/40">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 group/item"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-[#64ffda]/50 rounded-full group-hover/item:bg-[#64ffda] transition-colors duration-300" />
                      <p className="text-white/50 group-hover/item:text-white/70 transition-colors duration-300">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;