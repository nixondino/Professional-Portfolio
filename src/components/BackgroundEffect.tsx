'use client';

import React from 'react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic tech-grid backdrop overlay */}
      <div className="absolute inset-0 grid-lines opacity-75 animate-grid-drift" />

      {/* Modern gradient accent blobs */}
      <div 
        className="gradient-blob w-[500px] h-[500px] bg-accent-primary"
        style={{
          top: '-10%',
          left: '-5%',
          animation: 'float-slow 25s ease-in-out infinite',
        }}
      />
      <div 
        className="gradient-blob w-[600px] h-[600px] bg-accent-secondary"
        style={{
          top: '35%',
          right: '-10%',
          animation: 'float-medium 30s ease-in-out infinite alternate',
        }}
      />
      <div 
        className="gradient-blob w-[450px] h-[450px] bg-accent-tertiary"
        style={{
          bottom: '-5%',
          left: '20%',
          animation: 'float-slow 20s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Subtle radial shading overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,var(--background)_95%] opacity-90" />
    </div>
  );
}
