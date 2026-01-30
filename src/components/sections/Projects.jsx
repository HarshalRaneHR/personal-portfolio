import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/mock';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`relative grid lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:text-right'}`}
    >
      {/* Project Info */}
      <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xs text-[#64ffda] font-mono tracking-wider"
        >
          Featured Project
        </motion.span>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-bold text-white mt-3 mb-2"
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-white/40 mb-6"
        >
          {project.subtitle} • {project.period}
        </motion.p>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`relative bg-[#111113] border border-white/[0.05] rounded-xl p-6 mb-6 ${isEven ? '' : 'lg:ml-auto'} max-w-lg`}
        >
          <p className="text-white/60 text-sm leading-relaxed">
            {project.description}
          </p>
          
          {/* Features */}
          <ul className={`mt-4 space-y-2 ${isEven ? '' : 'lg:text-left'}`}>
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-white/40">
                <span className="w-1 h-1 bg-[#64ffda] rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className={`flex flex-wrap gap-2 mb-6 ${isEven ? '' : 'lg:justify-end'}`}
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono text-white/50 bg-white/[0.03] rounded"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className={`flex gap-4 ${isEven ? '' : 'lg:justify-end'}`}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            className="p-2 text-white/40 hover:text-[#64ffda] transition-colors"
          >
            <Github size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            className="p-2 text-white/40 hover:text-[#64ffda] transition-colors"
          >
            <ExternalLink size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Visual */}
      <motion.div
        className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="group relative overflow-hidden rounded-xl">
          {/* Project Preview Box */}
          <div 
            className="aspect-video bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.05] rounded-xl flex items-center justify-center relative overflow-hidden"
          >
            {/* Gradient accent based on project color */}
            <div 
              className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full blur-[80px] opacity-20"
              style={{ backgroundColor: project.color }}
            />
            
            {/* Code-like decoration */}
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${project.color}15` }}>
                <span className="text-2xl font-bold" style={{ color: project.color }}>
                  {project.title.charAt(0)}
                </span>
              </div>
              <p className="text-sm text-white/30 font-mono">{project.subtitle}</p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#0a0a0b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                className="flex items-center gap-2 text-[#64ffda]"
              >
                <span className="text-sm font-medium">View Project</span>
                <ArrowUpRight size={16} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-32 lg:py-48 bg-[#08080a] overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#64ffda]/[0.02] rounded-full blur-[150px]"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-[#64ffda] font-mono tracking-widest uppercase">
              04 / Projects
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Things I've
              <span className="block text-white/30">built</span>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:flex lg:items-end lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-white/50 max-w-md">
              A selection of projects that showcase my full-stack development capabilities.
            </p>
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;