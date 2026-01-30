import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education, certifications } from '../../data/mock';

const Education = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="relative py-32 lg:py-48 bg-[#0a0a0b] overflow-hidden"
    >
      {/* Background */}
      <motion.div 
        className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#3b82f6]/[0.03] rounded-full blur-[120px]"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-[#64ffda] font-mono tracking-widest uppercase">
            05 / Education & Certifications
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            Foundation &
            <span className="block text-white/30">credentials</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#64ffda]/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-[#64ffda]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative pl-6 border-l border-white/10 hover:border-[#64ffda]/30 transition-colors duration-300"
                >
                  <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-white/20 group-hover:bg-[#64ffda] transition-colors duration-300" />
                  
                  <h4 className="text-lg font-medium text-white mb-1">{edu.degree}</h4>
                  {edu.field && <p className="text-sm text-[#64ffda]/80 mb-2">{edu.field}</p>}
                  <p className="text-sm text-white/50 mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-xs text-white/30">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#64ffda]/10 flex items-center justify-center">
                <Award size={20} className="text-[#64ffda]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="group p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-[#64ffda]/20 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-white font-medium group-hover:text-[#64ffda] transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-white/40 mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-white/30 font-mono bg-white/[0.05] px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;