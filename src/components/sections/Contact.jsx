import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "../../data/mock";

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 lg:py-48 bg-portfolio-bg-secondary overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--portfolio-accent)]/[0.02] rounded-full blur-[150px] pointer-events-none"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-portfolio-accent font-mono tracking-widest uppercase">
              06 / Contact
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-portfolio-text mt-4 leading-tight">
              Let's build
              <span className="block text-portfolio-text-subtle">
                something together
              </span>
            </h2>
            <p className="text-lg text-portfolio-text-muted mt-6 max-w-lg">
              I'm currently open to new opportunities and collaborations.
              Whether you have a project in mind or just want to connect, feel
              free to reach out.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Links */}
            <div className="space-y-4 mb-12">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4 p-4 bg-portfolio-card-bg border border-portfolio-border rounded-xl hover:border-portfolio-accent/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-portfolio-accent/10 flex items-center justify-center group-hover:bg-portfolio-accent/20 transition-colors duration-300">
                    <link.icon size={18} className="text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-portfolio-text-subtle uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-portfolio-text-muted group-hover:text-portfolio-text transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group flex items-center gap-3 px-5 py-3 bg-portfolio-card-bg border border-portfolio-border rounded-xl hover:border-portfolio-accent/30 transition-all duration-300"
                >
                  <link.icon
                    size={18}
                    className="text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors duration-300"
                  />
                  <span className="text-sm text-portfolio-text-muted group-hover:text-portfolio-text transition-colors duration-300">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-portfolio-text-subtle group-hover:text-portfolio-accent transition-colors duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-portfolio-text-subtle uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-portfolio-card-bg border border-portfolio-border rounded-xl text-portfolio-text placeholder-portfolio-text-subtle focus:outline-none focus:border-portfolio-accent/50 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs text-portfolio-text-subtle uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-portfolio-card-bg border border-portfolio-border rounded-xl text-portfolio-text placeholder-portfolio-text-subtle focus:outline-none focus:border-portfolio-accent/50 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-portfolio-text-subtle uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-portfolio-card-bg border border-portfolio-border rounded-xl text-portfolio-text placeholder-portfolio-text-subtle focus:outline-none focus:border-portfolio-accent/50 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 bg-portfolio-accent text-portfolio-bg font-medium rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : isSubmitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
