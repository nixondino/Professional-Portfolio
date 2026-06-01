'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../components/ThemeContext';
import CustomCursor from '../components/CustomCursor';
import BackgroundEffect from '../components/BackgroundEffect';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Professional loader progress simulation
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Small delay for fadeout animation
          return 100;
        }
        // Random incremental steps for realistic feel
        const increment = Math.floor(Math.random() * 12) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <ThemeProvider>
      {/* Premium Loader Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="space-y-6 text-center">
              {/* Glowing spinner node */}
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-accent-primary animate-spin" />
                <div className="absolute w-10 h-10 rounded-full border-b-2 border-l-2 border-accent-secondary animate-spin-reverse" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-widest bg-gradient-to-r from-accent-primary to-accent-tertiary bg-clip-text text-transparent">
                  NIXON DINO B
                </h2>
                <div className="text-[10px] font-mono text-fg-custom/40">
                  Initializing modules... {loadingProgress}%
                </div>
              </div>

              {/* Progress bar line */}
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden border border-white/10 mx-auto">
                <div
                  className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Layout Frame */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen bg-bg-custom text-fg-custom flex flex-col"
        >
          {/* Interactive overlays */}
          <CustomCursor />
          <BackgroundEffect />
          <Navbar />

          {/* Scrolling sections */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </ThemeProvider>
  );
}
