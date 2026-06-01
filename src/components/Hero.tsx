'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Download, Terminal } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width={props.width || 20}
    height={props.height || 20}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width={props.width || 20}
    height={props.height || 20}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ROTATING_TEXTS = [
  'Software Developer',
  'Data Analyst',
  'Cloud Computing Enthusiast',
  'Problem Solver',
];

const STATISTICS = [
  { value: '4th Year', label: 'IT Student' },
  { value: '5+', label: 'Featured Projects' },
  { value: 'Python & SQL', label: 'Developer Core' },
  { value: 'Cloud & Data', label: 'Tech Focus' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriting effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROTATING_TEXTS[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Intro Text Column (Left) */}
        <motion.div
          className="lg:col-span-7 space-y-6 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel border-accent-primary/20 text-xs font-semibold text-accent-primary shadow-sm shadow-accent-primary/5"
            whileHover={{ scale: 1.05 }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Opportunities</span>
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
                Nixon Dino B
              </span>
            </h1>

            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-semibold text-fg-custom/80">
              <span className="text-accent-tertiary mr-2 font-mono">&gt;</span>
              <span>{currentText}</span>
              <span className="typing-cursor font-mono">|</span>
            </div>
          </div>

          <p className="text-lg text-fg-custom/75 max-w-xl leading-relaxed">
            I am a fourth-year Information Technology student passionate about Software Development, Data Analytics, and Cloud Computing. I enjoy building scalable solutions, solving real-world problems, and continuously learning modern technologies.
          </p>

          <p className="italic text-sm text-fg-custom/60 font-medium border-l-2 border-accent-secondary/50 pl-3">
            "Building technology solutions that create real-world impact."
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group px-6 py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary text-white font-medium shadow-md shadow-accent-primary/25 hover:shadow-accent-secondary/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl glass-panel text-fg-custom font-medium hover:bg-fg-custom/5 hover:border-accent-primary/30 transition-all duration-300"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-4 py-3 rounded-xl glass-panel text-fg-custom/85 hover:text-accent-secondary hover:bg-fg-custom/5 transition-all duration-300 flex items-center space-x-1.5"
              title="Download Resume"
            >
              <Download size={16} />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4 pt-4 border-t border-glass-border max-w-xs">
            <a
              href="https://github.com/nixondino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-custom/70 hover:text-accent-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nixon-dino-4608243a2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-custom/70 hover:text-accent-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:nixondino644@gmail.com"
              className="text-fg-custom/70 hover:text-accent-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Profile Card Column (Right) */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glowing Accent Glow Ring behind profile card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary via-accent-secondary to-accent-tertiary rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 animate-glow" />

            {/* Float effect wrapper */}
            <div className="relative w-full h-full glass-panel border border-glass-border p-4 rounded-3xl shadow-2xl flex flex-col justify-between animate-float-medium">
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-glass-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/nixon-dino.jpg"
                  alt="Nixon Dino B Portrait"
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] saturate-[0.9] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Float code decoration overlay */}
              <div className="absolute bottom-6 right-6 glass-panel border-glass-border/40 py-1.5 px-3 rounded-lg flex items-center space-x-1.5 text-[10px] font-mono text-accent-tertiary">
                <Terminal size={10} />
                <span>nixon.status = "deploying"</span>
              </div>
            </div>

            {/* Tiny floating decorative nodes */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full glass-panel border-accent-secondary/30 flex items-center justify-center animate-bounce duration-1000 shadow-md">
              <span className="text-xs">🐍</span>
            </div>
            <div className="absolute -bottom-2 -left-6 w-12 h-12 rounded-xl glass-panel border-accent-tertiary/20 flex items-center justify-center animate-float-fast shadow-md">
              <span className="text-xs font-bold text-accent-tertiary font-mono">SQL</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Statistics Footer */}
      <div className="absolute bottom-8 left-0 right-0 z-10 hidden md:block max-w-7xl mx-auto px-4">
        <motion.div
          className="glass-panel border-glass-border/30 rounded-2xl grid grid-cols-4 gap-6 p-4 text-center backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {STATISTICS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-fg-custom/65">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
