'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, BarChart3, CloudLightning, CheckCircle2 } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: <Code2 className="text-accent-primary" size={20} />,
    borderColor: 'border-accent-primary/20',
    bgColor: 'bg-accent-primary/5',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Software Development',
    icon: <Settings className="text-accent-secondary" size={20} />,
    borderColor: 'border-accent-secondary/20',
    bgColor: 'bg-accent-secondary/5',
    skills: [
      'Object-Oriented Programming',
      'REST APIs',
      'Authentication Systems',
      'Database Design',
      'Git & GitHub',
    ],
  },
  {
    title: 'Data Analytics',
    icon: <BarChart3 className="text-accent-tertiary" size={20} />,
    borderColor: 'border-accent-tertiary/20',
    bgColor: 'bg-accent-tertiary/5',
    skills: [
      'Data Cleaning',
      'Data Visualization',
      'SQL Query Optimization',
      'Reporting & Insights',
    ],
  },
  {
    title: 'Cloud Computing',
    icon: <CloudLightning className="text-amber-500" size={20} />,
    borderColor: 'border-amber-500/20',
    bgColor: 'bg-amber-500/5',
    skills: [
      'Cloud Fundamentals',
      'Deployment Concepts',
      'Scalable Systems',
      'Cloud Infrastructure Basics',
    ],
  },
];

const SHOWCASE_TECHS = [
  { name: 'Python', icon: '🐍', bg: 'bg-blue-500/10 border-blue-500/35 text-blue-400' },
  { name: 'SQL', icon: '💾', bg: 'bg-emerald-500/10 border-emerald-500/35 text-emerald-400' },
  { name: 'Git', icon: '🌿', bg: 'bg-orange-500/10 border-orange-500/35 text-orange-400' },
  { name: 'GitHub', icon: '🐙', bg: 'bg-purple-500/10 border-purple-500/35 text-purple-400' },
  { name: 'Cloud Technologies', icon: '☁️', bg: 'bg-cyan-500/10 border-cyan-500/35 text-cyan-400' },
  { name: 'Analytics Tools', icon: '📊', bg: 'bg-rose-500/10 border-rose-500/35 text-rose-400' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  } as const;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-tertiary">
            Superpowers
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Skills & Capabilities
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-tertiary to-accent-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              className={`glass-panel p-6 rounded-2xl border ${category.borderColor} ${category.bgColor} flex flex-col justify-between`}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div>
                <div className="flex items-center space-x-2.5 mb-6">
                  <div className="p-2 bg-fg-custom/5 rounded-xl border border-glass-border">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-bold text-fg-custom/90">{category.title}</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 text-sm text-fg-custom/75"
                    >
                      <CheckCircle2 size={15} className="text-accent-tertiary flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase */}
        <div className="mt-20 pt-10 border-t border-glass-border">
          <div className="text-center mb-10">
            <h4 className="text-base font-semibold text-fg-custom/80 font-sans">
              Core Tech Stack Showcase
            </h4>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {SHOWCASE_TECHS.map((tech, i) => (
              <motion.div
                key={tech.name}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-sm font-semibold cursor-default ${tech.bg}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 20px -10px currentColor',
                  y: -3,
                }}
              >
                <span className="text-lg">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
