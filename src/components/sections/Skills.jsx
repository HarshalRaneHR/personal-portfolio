import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { skills } from '../../data/mock';

const SkillCategory = ({ title, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <h3 className="text-xs text-[#64ffda] font-mono uppercase tracking-widest mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 text-sm text-white/70 bg-white/[0.03] border border-white/[0.08] rounded-lg hover:border-[#64ffda]/30 hover:text-white transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const skillCategories = [
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'DevOps & Tools', items: skills.devops },
    { title: 'Testing', items: skills.testing },
    { title: 'Other', items: skills.other },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-32 lg:py-48 bg-[#08080a] overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#64ffda]/[0.02] rounded-full blur-[150px] -translate-y-1/2"
        style={{ x }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header - Asymmetric */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-[#64ffda] font-mono tracking-widest uppercase">
              02 / Skills
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Technical
              <span className="block text-white/30">arsenal</span>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-7 lg:flex lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-white/50 max-w-lg">
              A comprehensive toolkit refined through real-world projects and continuous learning.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid - Staggered Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              items={category.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;