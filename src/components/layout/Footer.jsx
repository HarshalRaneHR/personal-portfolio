import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-portfolio-bg border-t border-portfolio-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-xl font-semibold text-portfolio-text">
              <span className="text-portfolio-accent">H</span>arshal<span className="text-portfolio-text-subtle">.</span>
            </a>
            <p className="text-sm text-portfolio-text-subtle mt-2 flex items-center justify-center md:justify-start gap-1">
              Crafted with <Heart size={12} className="text-portfolio-accent" /> in Mumbai
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 text-portfolio-text-subtle hover:text-portfolio-accent transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 text-portfolio-text-subtle hover:text-portfolio-accent transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 text-portfolio-text-subtle hover:text-portfolio-accent transition-colors duration-300"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          {/* Right - Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-2 px-4 py-2 text-sm text-portfolio-text-subtle hover:text-portfolio-accent border border-portfolio-border hover:border-portfolio-accent/30 rounded-full transition-all duration-300"
            >
              <span>Back to top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-portfolio-border text-center"
        >
          <p className="text-xs text-portfolio-text-subtle">
            © {new Date().getFullYear()} Harshal Rane. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
