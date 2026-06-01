'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Cloud, BookOpen, Lightbulb } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  } as const;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-xs font-semibold uppercase tracking-widest text-accent-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Story
          </motion.h2>
          <motion.h3 
            className="text-3xl sm:text-4xl font-bold mt-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Nixon Dino B
          </motion.h3>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Bento Cell 1: Main Story (8 Cols on desktop, 12 on mobile) */}
          <motion.div 
            className="col-span-12 lg:col-span-8 glass-panel glass-panel-hover p-8 rounded-3xl border border-glass-border flex flex-col justify-between"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent-secondary">
                <Brain size={22} />
                <h4 className="text-lg font-bold">Academic Journey & Tech Passion</h4>
              </div>
              <h5 className="text-xl font-bold text-fg-custom/90">
                Information Technology student designing the future of software and data architecture.
              </h5>
              <p className="text-fg-custom/75 leading-relaxed text-sm">
                I am a final-year Information Technology student with a deep interest in software development, data analytics, and cloud engineering. Over the past four years, my passion for technology has evolved from curiosity into a focused drive to engineer systems that are scalable, efficient, and robust.
              </p>
              <p className="text-fg-custom/75 leading-relaxed text-sm">
                I thrive in environments that challenge me to solve complex, real-world problems. Whether writing object-oriented code, designing database schemas, or examining raw metrics for actionable insights, I approach each task with analytical precision and a growth-focused mindset.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                Final Year IT
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20">
                Problem Solver
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent-tertiary/10 text-accent-tertiary border border-accent-tertiary/20">
                Continuous Learner
              </span>
            </div>
          </motion.div>

          {/* Bento Cell 2: High-Level stats (4 Cols on desktop, 12 on mobile) */}
          <motion.div 
            className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel glass-panel-hover p-8 rounded-3xl border border-glass-border flex flex-col justify-between"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent-primary">
                <Lightbulb size={22} />
                <h4 className="text-lg font-bold font-sans">Core Values</h4>
              </div>
              <ul className="space-y-3.5 text-sm text-fg-custom/80">
                <li className="flex items-start space-x-2">
                  <span className="text-accent-primary mt-0.5">•</span>
                  <span><strong>Clean Architecture:</strong> Prioritizing maintainable code patterns.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-primary mt-0.5">•</span>
                  <span><strong>Data-Driven:</strong> Harnessing data insights to guide decisions.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-primary mt-0.5">•</span>
                  <span><strong>Cloud-First:</strong> Designing solutions with scalability in mind.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-primary mt-0.5">•</span>
                  <span><strong>Self-Correction:</strong> Always auditing and tuning my solutions.</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-glass-border flex items-center space-x-2.5 text-xs text-fg-custom/60">
              <BookOpen size={14} className="text-accent-secondary" />
              <span>Current focus: Distributed Cloud Architectures</span>
            </div>
          </motion.div>

          {/* Bento Cell 3: Data Analyst focus (4 Cols) */}
          <motion.div 
            className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel glass-panel-hover p-8 rounded-3xl border border-glass-border group relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Tech background element overlay */}
            <div className="absolute top-0 right-0 p-4 opacity-5 text-fg-custom group-hover:scale-110 transition-transform duration-500">
              <Database size={100} />
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="p-3 bg-accent-tertiary/10 rounded-2xl w-fit text-accent-tertiary">
                <Database size={24} />
              </div>
              <h4 className="text-lg font-bold">Data Analytics Mindset</h4>
              <p className="text-xs text-fg-custom/70 leading-relaxed">
                Raw data is noise without structure. I specialize in cleaning data pipelines, constructing optimized SQL database schemas, and building visual dashboards to convert raw information into clear business intelligence.
              </p>
            </div>
          </motion.div>

          {/* Bento Cell 4: Software Dev focus (4 Cols) */}
          <motion.div 
            className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel glass-panel-hover p-8 rounded-3xl border border-glass-border group relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 text-fg-custom group-hover:scale-110 transition-transform duration-500">
              <Cpu size={100} />
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="p-3 bg-accent-secondary/10 rounded-2xl w-fit text-accent-secondary">
                <Cpu size={24} />
              </div>
              <h4 className="text-lg font-bold">Software Development</h4>
              <p className="text-xs text-fg-custom/70 leading-relaxed">
                I enjoy writing programs in Python, with a strong focus on object-oriented programming (OOP), robust authentication workflows, database security structures, and custom API systems.
              </p>
            </div>
          </motion.div>

          {/* Bento Cell 5: Cloud computing focus (4 Cols) */}
          <motion.div 
            className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel glass-panel-hover p-8 rounded-3xl border border-glass-border group relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 text-fg-custom group-hover:scale-110 transition-transform duration-500">
              <Cloud size={100} />
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="p-3 bg-accent-primary/10 rounded-2xl w-fit text-accent-primary">
                <Cloud size={24} />
              </div>
              <h4 className="text-lg font-bold">Cloud Infrastructure</h4>
              <p className="text-xs text-fg-custom/70 leading-relaxed">
                Interested in virtualization and cloud systems. I study modern containerization patterns, serverless scaling, API deployments, and foundational DevOps automation workflows to make code globally accessible.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
