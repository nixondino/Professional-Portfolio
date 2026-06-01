'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-glass-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        {/* Brand Copyright */}
        <p className="text-sm font-bold text-fg-custom/80">
          Nixon Dino B &copy; 2026
        </p>

        {/* Technical specs caption */}
        <p className="text-xs text-fg-custom/50">
          Engineered with{' '}
          <span className="text-accent-primary hover:underline cursor-default">Next.js 15+</span>,{' '}
          <span className="text-accent-secondary hover:underline cursor-default">Tailwind CSS v4</span> &{' '}
          <span className="text-accent-tertiary hover:underline cursor-default">Framer Motion</span>.
        </p>

        {/* Back to top jump link */}
        <div className="pt-2">
          <a
            href="#home"
            className="text-xs font-semibold text-fg-custom/40 hover:text-accent-primary transition-colors duration-300"
          >
            Back to top &uarr;
          </a>
        </div>

      </div>
    </footer>
  );
}
