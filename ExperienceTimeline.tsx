'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  ShoppingBag, 
  Boxes, 
  Users, 
  Zap, 
  TrendingUp,
  Award,
  Circle
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

const experiences = [
  {
    company: "Wirausaha Merdeka — Bola Ubi Jatinangor",
    role: "Project Lead & Sales Manager",
    period: "Jul 2023 – Dec 2023",
    highlight: "Scaled daily sales from 40 to 120 units in 48 hours.",
    icon: <Zap className="w-5 h-5 text-emerald-500" />,
    type: "Entrepreneurship"
  },
  {
    company: "Marthabucks.id",
    role: "Sales & Distribution Supervisor",
    period: "Aug 2018 – Aug 2022",
    highlight: "Built and managed 10 reseller partners.",
    icon: <Users className="w-5 h-5 text-blue-500" />,
    type: "Sales Management"
  },
  {
    company: "Parfumerie del Archipelago",
    role: "E-Commerce Specialist",
    period: "Aug 2020 – Jan 2022",
    highlight: "Generated IDR 76M revenue through Shopee optimization.",
    icon: <ShoppingBag className="w-5 h-5 text-purple-500" />,
    type: "Digital Growth"
  },
  {
    company: "Badtrip Division",
    role: "Head of Merchandising & Production",
    period: "Jan 2021 – Jan 2023",
    highlight: "Managed 2,000+ apparel units across projects.",
    icon: <Boxes className="w-5 h-5 text-orange-500" />,
    type: "Operations"
  },
  {
    company: "Jatinangor Social Festival",
    role: "Head of Fundraising",
    period: "Jul 2022 – Oct 2022",
    highlight: "Generated IDR 15–25M fundraising in 2 months.",
    icon: <TrendingUp className="w-5 h-5 text-pink-500" />,
    type: "Leadership"
  }
];

export default function ExperienceTimeline({ onMoreClick }: { onMoreClick?: () => void }) {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden border-t border-slate-100">
      {/* Background Subtle Wash */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 mb-4"
          >
            <div className="h-0.5 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase">
              Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-[1.1]"
          >
            Real Experience Across <br className="hidden sm:block" />
            Business, <span className="text-emerald-500">Sales & Growth</span> Execution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl"
          >
            From entrepreneurship to commercial operations and community leadership.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Timeline Line (Desktop Only) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-slate-200 to-transparent hidden md:block" 
          />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, ...springConfig }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 mt-1 md:mt-0 flex items-center justify-center">
                  <motion.div 
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:border-emerald-200 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-300"
                  >
                    {exp.icon}
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-24 h-24 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-full blur-xl transition-all duration-500" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  {/* Desktop Period Rail (Col 3) */}
                  <div className="lg:col-span-3 pt-4">
                    <div className="flex items-center space-x-2 text-slate-400 group-hover:text-emerald-600 transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Card Content (Col 9) */}
                  <div className="lg:col-span-9">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="rounded-3xl border border-slate-100/60 bg-white p-6 lg:p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40 relative overflow-hidden"
                    >
                      {/* Subtle accent corner */}
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                        <Award className="w-12 h-12 text-slate-900" />
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                             {exp.company}
                          </h3>
                          <p className="text-sm lg:text-base font-bold text-emerald-600 tracking-wide">
                            {exp.role}
                          </p>
                        </div>
                        
                        <div className="pt-4 border-t border-slate-50">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                              <TrendingUp className="h-3 w-3" />
                            </div>
                            <p className="text-sm lg:text-base font-medium text-slate-500 leading-relaxed italic">
                              "{exp.highlight}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Summary CTA */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 1.2 }}
           className="mt-20 lg:mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h4 className="text-lg font-black text-slate-900 mb-2">Continuous Growth Track</h4>
            <p className="text-sm font-medium text-slate-400 leading-relaxed">
              Consistently taking ownership in high-pressure environments, from scaling campus ventures to managing enterprise-level apparel production.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
             <motion.a 
               href="#contact"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex-shrink-0 px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-bold shadow-2xl shadow-slate-900/20 hover:bg-slate-800 transition-all"
             >
               Request Detailed CV
             </motion.a>
             <motion.button 
               onClick={onMoreClick}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex-shrink-0 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl text-sm font-bold hover:bg-slate-50 transition-all"
             >
               View Full Experience
             </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
