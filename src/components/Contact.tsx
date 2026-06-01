'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width={props.width || 16}
    height={props.height || 16}
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
    width={props.width || 16}
    height={props.height || 16}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simulate network latency
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset success status after a delay
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-primary">
            Connect
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Get In Touch
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Side Panel: Social Details (5 Cols) */}
          <motion.div
            className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-glass-border flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-fg-custom/95">
                Let's discuss new opportunities
              </h4>
              <p className="text-xs text-fg-custom/70 leading-relaxed">
                Whether you're looking to discuss software engineering roles, data analytics internships, freelancing services, or cloud projects—feel free to drop me a message. I am responsive and always open to connecting!
              </p>
            </div>

            <div className="space-y-4 my-8">
              {/* Mail */}
              <a
                href="mailto:nixondino644@gmail.com"
                className="flex items-center space-x-3.5 p-3 rounded-xl border border-glass-border hover:border-accent-primary/20 bg-fg-custom/[0.01] hover:bg-fg-custom/[0.03] transition-all duration-300 group"
              >
                <div className="p-2 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:scale-105 transition-transform duration-300">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-fg-custom/50 uppercase">Email Address</div>
                  <div className="text-xs font-semibold text-fg-custom/85">nixondino644@gmail.com</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/nixondino"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3.5 p-3 rounded-xl border border-glass-border hover:border-accent-secondary/20 bg-fg-custom/[0.01] hover:bg-fg-custom/[0.03] transition-all duration-300 group"
              >
                <div className="p-2 bg-accent-secondary/10 rounded-lg text-accent-secondary group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-fg-custom/50 uppercase">GitHub Profile</div>
                  <div className="text-xs font-semibold text-fg-custom/85">github.com/nixondino</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nixon-dino-4608243a2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3.5 p-3 rounded-xl border border-glass-border hover:border-accent-tertiary/20 bg-fg-custom/[0.01] hover:bg-fg-custom/[0.03] transition-all duration-300 group"
              >
                <div className="p-2 bg-accent-tertiary/10 rounded-lg text-accent-tertiary group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-fg-custom/50 uppercase">LinkedIn Connection</div>
                  <div className="text-xs font-semibold text-fg-custom/85">linkedin.com/in/nixon-dino</div>
                </div>
              </a>
            </div>

            <div className="text-[10px] text-fg-custom/50 font-medium">
              Average response time: &lt; 24 Hours
            </div>
          </motion.div>

          {/* Form Panel: Interactive validation (7 Cols) */}
          <motion.div
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-glass-border flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-fg-custom/60">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-xl border bg-fg-custom/[0.02] focus:bg-fg-custom/[0.04] text-xs transition-all duration-300 focus:outline-none focus:ring-1 ${
                    errors.name
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-glass-border focus:border-accent-primary focus:ring-accent-primary'
                  }`}
                />
                {errors.name && <p className="text-[10px] font-semibold text-rose-400 mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-fg-custom/60">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 rounded-xl border bg-fg-custom/[0.02] focus:bg-fg-custom/[0.04] text-xs transition-all duration-300 focus:outline-none focus:ring-1 ${
                    errors.email
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-glass-border focus:border-accent-primary focus:ring-accent-primary'
                  }`}
                />
                {errors.email && <p className="text-[10px] font-semibold text-rose-400 mt-1">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-fg-custom/60">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write details about your project or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl border bg-fg-custom/[0.02] focus:bg-fg-custom/[0.04] text-xs transition-all duration-300 focus:outline-none focus:ring-1 resize-none ${
                    errors.message
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-glass-border focus:border-accent-primary focus:ring-accent-primary'
                  }`}
                />
                {errors.message && <p className="text-[10px] font-semibold text-rose-400 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-secondary hover:to-accent-primary disabled:opacity-50 text-white font-semibold text-xs shadow-md shadow-accent-primary/20 hover:shadow-accent-secondary/20 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Secure Message</span>
                    <Send size={13} />
                  </>
                )}
              </button>
            </form>

            {/* Form Success/Error Toast Feedback Indicator */}
            <div className="mt-4 min-h-[40px]">
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    className="flex items-center space-x-2 p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl text-[11px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle2 size={14} className="flex-shrink-0" />
                    <span>Success! Nixon has received your message and will respond shortly.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    className="flex items-center space-x-2 p-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-xl text-[11px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>Error occurred. Please verify your internet connection or email directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
