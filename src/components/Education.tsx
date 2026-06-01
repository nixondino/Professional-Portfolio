'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Heart, Route } from 'lucide-react';

const COURSEWORK = [
  'Relational Database Management Systems',
  'Software Engineering Principles',
  'Object-Oriented Analysis & Design',
  'Data Structures & Algorithms',
  'Cloud Architecture & Virtualization',
  'Data Analysis & Visualization',
  'Computer Networks & Protocols',
  'Information Security Fundamentals',
];

const INTERESTS = [
  'Distributed Systems',
  'Machine Learning Foundations',
  'Automated Cloud Infrastructure',
  'Data Pipeline Design',
  'Secure API Development',
  'UX/UI Component Styling',
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-tertiary">
            Academics
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Education & Journey
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-tertiary to-accent-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Degree Card (7 Cols) */}
          <motion.div
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-glass-border flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 bg-accent-tertiary/10 rounded-2xl text-accent-tertiary border border-accent-tertiary/20">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-fg-custom/95">Bachelor of Technology (B.Tech)</h4>
                    <p className="text-[11px] sm:text-xs font-semibold text-fg-custom/65">VelTech MultiTech Dr.RR & Dr.SR Eng. College</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                  CGPA: 7.56
                </span>
              </div>

              <div className="space-y-3">
                <h5 className="text-sm font-bold uppercase tracking-wider text-accent-secondary flex items-center">
                  <Route size={14} className="mr-1.5" />
                  My Learning Journey
                </h5>
                <p className="text-xs text-fg-custom/75 leading-relaxed">
                  As an Engineering undergraduate specializing in B.Tech, I focus on the intersection of programmatic logic, data storage architectures, and cloud services. My studies at VelTech MultiTech have equipped me with core theoretical models while enabling me to experiment with practical software engineering applications.
                </p>
                <p className="text-xs text-fg-custom/75 leading-relaxed">
                  Through coursework, self-learning modules, and programming assemblies, I explore the lifecycle of tech operations—from writing code and tuning complex query engines, to managing deployment structures in server clusters.
                </p>
              </div>
            </div>

            {/* Program progress gauge */}
            <div className="mt-8 pt-6 border-t border-glass-border">
              <div className="flex items-center justify-between text-xs font-semibold text-fg-custom/70 mb-2">
                <span>Degree Progression Status</span>
                <span>Final Semesters (90% Complete)</span>
              </div>
              <div className="w-full h-2.5 bg-fg-custom/5 rounded-full overflow-hidden border border-glass-border">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary"
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Academic Coursework & Interests Sidebar (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Coursework Block */}
            <motion.div
              className="glass-panel p-6 rounded-2xl border border-glass-border flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent-tertiary mb-4 flex items-center">
                <BookOpen size={14} className="mr-1.5" />
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {COURSEWORK.map((course) => (
                  <span
                    key={course}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-fg-custom/5 text-fg-custom/80 hover:bg-fg-custom/10 hover:text-accent-primary transition-all duration-300 cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Technical Interests Block */}
            <motion.div
              className="glass-panel p-6 rounded-2xl border border-glass-border flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent-secondary mb-4 flex items-center">
                <Heart size={14} className="mr-1.5" />
                Technical Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-fg-custom/5 text-fg-custom/85 border border-glass-border hover:border-accent-secondary/35 transition-all duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
