'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Sparkles, Terminal, Flame } from 'lucide-react';

const ACHIEVEMENTS_DATA = [
  {
    title: 'Certifications',
    icon: <Award className="text-accent-primary" size={20} />,
    description: 'Completing developer credentials and database specializations focusing on Python scripting, system administration, and programming fundamentals.',
    items: [
      'Linux and Shell Scripting',
      'Python Course',
      'Java And C++ Complete Course for Beginners',
    ],
  },
  {
    title: 'Workshops & Training',
    icon: <Terminal className="text-accent-secondary" size={20} />,
    description: 'Participating in technical development bootcamps, security audits, and application design workshops outside standard coursework.',
    items: ['Database Design Masterclass', 'REST API Construction & Security'],
  },
  {
    title: 'Technical Events & Expos',
    icon: <Sparkles className="text-accent-tertiary" size={20} />,
    description: 'Engaging with technical forums, student IT conferences, and hardware/software symposiums to stay informed on development shifts.',
    items: ['University Tech Symposiums', 'Student IT Exhibitions & Meets'],
  },
  {
    title: 'Hackathons & Contests',
    icon: <Flame className="text-rose-500" size={20} />,
    description: 'Competing in code sprints, speed programming challenges, and prototyping modules to build functional software under tight timeframes.',
    items: ['Algorithmic Sprints', 'Open Source Prototypes Showcase'],
  },
  {
    title: 'Future Milestones',
    icon: <Award className="text-amber-500" size={20} />,
    description: 'Roadmapped training tracks, certification objectives, and professional designations planned for the upcoming quarters.',
    items: ['AWS Cloud Practitioner Target', 'Advanced Data Engineering Pathways'],
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 90, damping: 15 },
    },
  } as const;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-secondary">
            Milestones
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Achievements & Events
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-secondary to-accent-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {ACHIEVEMENTS_DATA.map((ach) => (
            <motion.div
              key={ach.title}
              className="glass-panel p-6 rounded-2xl border border-glass-border flex flex-col justify-between group relative overflow-hidden hover:border-accent-primary/20 bg-fg-custom/[0.005] duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2.5 bg-fg-custom/5 rounded-xl border border-glass-border">
                    {ach.icon}
                  </div>
                  <h4 className="text-base font-bold text-fg-custom/90">{ach.title}</h4>
                </div>

                <p className="text-xs text-fg-custom/70 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-glass-border space-y-2">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-accent-primary">
                  Key Entries
                </h5>
                <div className="flex flex-col space-y-1.5">
                  {ach.items.map((item) => (
                    <div
                      key={item}
                      className="text-[11px] font-medium text-fg-custom/80 flex items-center space-x-1.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-tertiary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
