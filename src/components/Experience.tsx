'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight, UserCheck } from 'lucide-react';

const TIMELINE_DATA = [
  {
    role: 'Open for Opportunities',
    company: 'Internship / Full-time Roles',
    period: 'Current Focus',
    description: 'Looking to join an forward-thinking team as an intern or entry-level associate. Ready to contribute Python scripting, SQL optimization, and cloud architecture basics to solve real engineering problems.',
    type: 'current',
  },
  {
    role: 'Freelance Software Developer & Analyst',
    company: 'Independent Projects',
    period: '2024 - Present',
    description: 'Building custom software applications and database tools for freelance clients. Crafting secure escrow workflows, clean transactional databases, and sales reports using Python and relational SQL models.',
    type: 'freelance',
  },
  {
    role: 'Information Technology Intern',
    company: 'Upcoming Industry Internship',
    period: 'Future Update Placeholder',
    description: 'Reserved space for technical internships, corporate co-ops, and early industry training. Set to document core learning points, agile team workflows, and enterprise project deployment highlights.',
    type: 'placeholder',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-primary">
            Career Pathway
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Professional Experience
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central vertical spine lines */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-primary via-accent-secondary to-glass-border transform -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  {/* Spine Node Marker Pin */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full glass-panel border border-accent-secondary bg-background transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      item.type === 'current' ? 'bg-emerald-400 animate-pulse' : 'bg-accent-primary'
                    }`} />
                  </div>

                  {/* Empty Spacer Column for Desktop balance */}
                  <div className="hidden md:block w-1/2" />

                  {/* Experience Card Content Block */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className={`glass-panel p-6 rounded-2xl border ${
                      item.type === 'current' 
                        ? 'border-emerald-500/25 bg-emerald-500/[0.01]' 
                        : 'border-glass-border'
                    } glass-panel-hover relative overflow-hidden group`}>
                      
                      {/* Subtly decorate background card */}
                      {item.type === 'current' && (
                        <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-emerald-500/5 blur-xl pointer-events-none" />
                      )}

                      {/* Header metrics */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-4">
                        <div className="flex items-center space-x-2 text-xs font-semibold text-accent-tertiary">
                          <Calendar size={12} />
                          <span>{item.period}</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-fit ${
                          item.type === 'current'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : item.type === 'freelance'
                            ? 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20'
                            : 'bg-fg-custom/5 text-fg-custom/40 border border-glass-border'
                        }`}>
                          {item.type}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-fg-custom/90 group-hover:text-accent-primary transition-colors duration-300">
                        {item.role}
                      </h4>
                      <h5 className="text-sm font-semibold text-fg-custom/65 mb-4 flex items-center">
                        <Briefcase size={13} className="mr-1 text-accent-secondary" />
                        {item.company}
                      </h5>

                      <p className="text-xs text-fg-custom/70 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Hover action elements */}
                      <div className="mt-4 flex items-center text-[10px] font-bold text-accent-primary group-hover:underline">
                        <span>Details</span>
                        <ChevronRight size={10} className="ml-0.5" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
