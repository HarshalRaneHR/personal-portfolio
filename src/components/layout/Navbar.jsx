import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo + Open to Work Badge */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                className="text-xl font-semibold tracking-tight text-white"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-[#64ffda]">H</span>arshal
                <span className="text-white/40">.</span>
              </motion.a>

              {/* Open to Work Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-400">Open to Work</span>
              </motion.div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#64ffda] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/40 hover:text-[#64ffda] transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/40 dark:text-white/40 hover:text-[#64ffda] transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin size={18} />
              </motion.a>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 text-white/40 dark:text-white/40 hover:text-[#64ffda] transition-colors duration-300 relative"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </motion.button>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="ml-2 px-4 py-2 text-sm border border-[#64ffda]/50 text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Say Hello
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0b]/98 backdrop-blur-xl md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-white/80 hover:text-[#64ffda] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center gap-6 mt-8">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#64ffda]">
                  <Github size={24} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#64ffda]">
                  <Linkedin size={24} />
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-white/40 hover:text-[#64ffda] transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;