'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Target, 
  Wrench, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Laptop, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

const skillCategories = [
  {
    title: "Business Development",
    icon: <Rocket className="w-5 h-5" />,
    skills: [
      "Lead Generation",
      "Opportunity Mapping",
      "Market Expansion",
      "Partnership Growth",
      "Pipeline Development"
    ],
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    hoverAccent: "border-emerald-300"
  },
  {
    title: "Sales & Commercial",
    icon: <BarChart3 className="w-5 h-5" />,
    skills: [
      "Sales Execution",
      "Negotiation",
      "Customer Acquisition",
      "Pricing Strategy",
      "Client Handling"
    ],
    accent: "bg-blue-50 text-blue-600 border-blue-100",
    hoverAccent: "border-blue-300"
  },
  {
    title: "Tools & Productivity",
    icon: <Laptop className="w-5 h-5" />,
    skills: [
      "Excel",
      "Google Workspace",
      "PowerPoint",
      "Figma",
      "Notion"
    ],
    accent: "bg-purple-50 text-purple-600 border-purple-100",
    hoverAccent: "border-purple-300"
  },
  {
    title: "Work Style",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      "Ownership Mindset",
      "Fast Learner",
      "Structured Thinking",
      "Growth Oriented"
    ],
    accent: "bg-orange-50 text-orange-600 border-orange-100",
    hoverAccent: "border-orange-300"
  }
];

export default function SkillsTools() {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 mb-4"
          >
            <div className="h-0.5 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase">
              Skills & Tools
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-[1.1]"
          >
            Capabilities Built <br className="hidden sm:block" />
            for <span className="text-emerald-500">Growth Execution</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl"
          >
            A practical blend of business development, commercial execution, communication, and modern productivity tools.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + catIndex * 0.1, ...springConfig }}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.08)"
              }}
              className={`group relative flex flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 transition-all duration-300 hover:border-slate-200`}
            >
              {/* Category Header */}
              <div className="mb-8 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.accent} border shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>
                <TrendingUp className="w-4 h-4 text-slate-200 group-hover:text-emerald-400 transition-colors" />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">
                {category.title}
              </h3>

              {/* Skill Tags List */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.03, backgroundColor: '#f1f5f9' }}
                    className="inline-flex items-center px-4 py-2 rounded-xl border border-slate-100 bg-[#F8FAFC] text-[13px] font-bold text-slate-600 transition-all cursor-default hover:text-slate-900 hover:border-slate-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Card Accent Glow */}
              <div className="absolute -inset-px rounded-[2.5rem] border-2 border-emerald-500/0 group-hover:border-emerald-500/10 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Detail */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 1.2 }}
           className="mt-16 lg:mt-24 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-slate-50 pt-12"
        >
          <div className="flex items-center space-x-4">
             <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
             </div>
             <div>
                <p className="text-sm font-black text-slate-900 leading-none mb-1">Ready for Action</p>
                <p className="text-xs font-medium text-slate-400">Fully equipped with a modern business execution stack.</p>
             </div>
          </div>
          
          <motion.a
            href="mailto:digitizerami@gmail.com"
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2 text-sm font-black text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-widest"
          >
            <span>Discuss Project Requirements</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
