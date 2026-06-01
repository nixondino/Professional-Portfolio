'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, Check, ShieldCheck, Database, LayoutTemplate, Briefcase } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  highlight?: boolean;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'ProjectEscrow',
    description: 'An end-to-end escrow system facilitating protected financial exchanges between clients and freelancers. Mitigates transaction risks with automated secure release protocols.',
    technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL / MongoDB', 'JWT'],
    features: [
      'Secure escrow workflow',
      'User authentication via JWT',
      'Freelancer & Client dashboards',
      'Milestone payment release processes',
      'Real-time transaction tracking & status monitoring',
    ],
    highlight: true,
  },
  {
    id: 2,
    title: 'Automated Gold Trading Architecture',
    description: 'A sophisticated Expert Advisor (EA) tailored for high-frequency XAU/USD trading utilizing 1-minute chart intervals and quantitative execution algorithms.',
    technologies: ['Python', 'MetaTrader 5', 'HTML / CSS', 'Vanilla JS'],
    features: [
      'Quantitative high-frequency execution',
      'XAU/USD trading indicators optimization',
      'Custom Expert Advisor EA code integrations',
      '1-minute chart interval data models',
    ],
  },
  {
    id: 3,
    title: 'Cloud-Based Task Management System',
    description: 'A collaborative task management platform designed with cloud architecture principles for global scalability, high-availability, and team productivity.',
    technologies: ['React', 'Next.js', 'Cloud Deployments', 'API Layer'],
    features: [
      'Team workspace collaboration',
      'Granular task assignment & boards',
      'Interactive project progress trackers',
      'Scalable cloud infrastructure hosting setup',
    ],
  },
  {
    id: 4,
    title: 'Sales Analytics Dashboard',
    description: 'A modern analytical reporting dashboard that transforms raw business transaction data into clear insights through optimized SQL-powered analytics.',
    technologies: ['SQL Query Tuning', 'Python', 'BI Reporting', 'Data Vis'],
    features: [
      'Key Performance Indicator (KPI) metrics tracking',
      'Dynamic charts and trend analysis',
      'Pre-compiled business intelligence reporting',
      'Advanced multi-parameter data filters',
    ],
  },
  {
    id: 5,
    title: 'Student Performance Analytics System',
    description: 'An intelligent academic monitoring database platform designed to evaluate student progress and forecast outcomes using analytical database schemas.',
    technologies: ['Database Design', 'Analytical SQL', 'Python Pandas'],
    features: [
      'Comprehensive performance progression monitoring',
      'Clean analytical visualizations & reporting',
      'Interactive teacher & administrative dashboard interfaces',
    ],
  },
  {
    id: 6,
    title: 'Inventory Management System',
    description: 'A full-stack product tracking platform engineered with transactional database integrations to handle stock levels and vendor logistics reports.',
    technologies: ['Full-Stack Dev', 'Relational Databases', 'Reports API'],
    features: [
      'Automated low-stock level notifications',
      'Secure transaction ledger logging',
      'Rapid inventory search, filtering, and queries',
    ],
  },
  {
    id: 7,
    title: 'Smart Expense Tracker',
    description: 'A personal finance tracking tool utilizing categorized analytics dashboards to record spending patterns and analyze budget health.',
    technologies: ['Python Core', 'SQL Databases', 'Matplotlib / Charts'],
    features: [
      'Intuitive expense classification systems',
      'Interactive monthly budget status charts',
      'Visual breakdown reports of financial habits',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-secondary">
            Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Featured Projects
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-secondary to-accent-tertiary mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlighted Project (Escrow Platform) */}
        {PROJECTS_DATA.filter(p => p.highlight).map((project) => (
          <motion.div
            key={project.id}
            className="glass-panel p-8 rounded-3xl border border-accent-primary/25 bg-accent-primary/[0.02] mb-8 relative overflow-hidden group shadow-xl"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Ambient background accent glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-accent-primary/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-accent-secondary/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-accent-primary text-xs font-bold uppercase tracking-wider bg-accent-primary/15 px-3 py-1 rounded-full border border-accent-primary/20">
                  <ShieldCheck size={12} className="mr-1" />
                  Primary Showcase
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-fg-custom/95 group-hover:text-accent-primary transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-sm sm:text-base text-fg-custom/75 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-fg-custom/5 border border-glass-border text-fg-custom/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-glass-border/40 bg-fg-custom/[0.01]">
                <h5 className="text-sm font-bold uppercase tracking-wider text-accent-secondary mb-4 flex items-center">
                  <LayoutTemplate size={14} className="mr-1.5" />
                  Key Workflows
                </h5>
                <ul className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-fg-custom/75">
                      <Check size={14} className="text-accent-tertiary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid (5 remaining) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.filter(p => !p.highlight).map((project, idx) => (
            <motion.div
              key={project.id}
              className="glass-panel p-6 rounded-2xl border border-glass-border flex flex-col justify-between group cursor-pointer hover:border-accent-secondary/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card top elements */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-fg-custom/5 rounded-xl border border-glass-border text-accent-secondary group-hover:text-accent-tertiary transition-colors duration-300">
                    <FolderGit2 size={18} />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-fg-custom/50 tracking-wider">
                    Project 0{idx + 2}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-fg-custom/90 group-hover:text-accent-secondary transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-xs text-fg-custom/70 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Card bottom elements */}
              <div className="mt-6 pt-4 border-t border-glass-border flex items-center justify-between">
                <div className="flex gap-1.5 overflow-hidden">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded bg-fg-custom/5 text-fg-custom/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-accent-tertiary flex items-center group-hover:underline">
                  Details <ExternalLink size={10} className="ml-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern Pop-up Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-panel max-w-lg w-full p-8 rounded-3xl border border-glass-border bg-background relative shadow-2xl space-y-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2.5 rounded-full text-fg-custom/50 hover:text-accent-primary hover:bg-fg-custom/5 transition-colors duration-300 border border-transparent hover:border-glass-border"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-extrabold text-fg-custom/95">
                  {selectedProject.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded bg-accent-secondary/15 text-accent-secondary border border-accent-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-fg-custom/75 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-2">
                  <h5 className="text-sm font-bold text-fg-custom/90 uppercase tracking-wider flex items-center">
                    <Briefcase size={12} className="mr-1.5 text-accent-tertiary" />
                    Key Features
                  </h5>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-fg-custom/75">
                        <Check size={14} className="text-accent-tertiary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-glass-border flex justify-end">
                <button
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary hover:opacity-90 text-white text-xs font-semibold shadow-md shadow-accent-primary/10 transition-all duration-300"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Explorer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
