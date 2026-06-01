'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track scrolling to add styling updates
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking logic
      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: item.href.replace('#', ''),
            top: rect.top + window.scrollY - 150, // offset for scroll padding
            bottom: rect.bottom + window.scrollY - 150,
          };
        }
        return null;
      }).filter(Boolean);

      const currentScroll = window.scrollY;
      const currentSection = sections.find(
        (sec) => sec && currentScroll >= sec.top && currentScroll < sec.bottom
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Page Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="glass-panel flex items-center justify-between px-6 py-3 rounded-2xl border border-glass-border">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-accent-primary to-accent-tertiary bg-clip-text text-transparent transition-all duration-300 hover:opacity-80"
          >
            Nixon Dino B
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:text-accent-primary ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-accent-primary'
                    : 'text-fg-custom/70'
                }`}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    className="absolute inset-0 bg-accent-primary/10 rounded-lg -z-10"
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Theme & Menu Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-fg-custom/70 hover:text-accent-primary hover:bg-fg-custom/5 transition-all duration-300 border border-transparent hover:border-glass-border"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-fg-custom/70 hover:text-accent-primary hover:bg-fg-custom/5 transition-all duration-300 border border-transparent hover:border-glass-border"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden fixed inset-x-0 top-[70px] bottom-0 z-30 px-4 pt-4 pb-6 bg-bg-custom/95 backdrop-blur-lg flex flex-col justify-start border-t border-glass-border"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="glass-panel flex flex-col space-y-2 p-6 rounded-2xl border border-glass-border">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-accent-primary bg-accent-primary/10'
                    : 'text-fg-custom/80 hover:text-accent-primary hover:bg-fg-custom/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
