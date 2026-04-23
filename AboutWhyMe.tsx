'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Rocket
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

const pillars = [
  {
    title: "Commercial Mindset",
    description: "Understands markets, customer behavior, pricing logic, and revenue opportunities with practical business judgment.",
    icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
    gradient: "from-emerald-500/10 to-transparent"
  },
  {
    title: "Hands-On Execution",
    description: "Experienced in field selling, reseller management, operations, fulfillment, and getting things done under pressure.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    title: "Growth Oriented",
    description: "Focused on continuous improvement, expansion strategy, and building scalable results through smart action.",
    icon: <Target className="w-6 h-6 text-purple-500" />,
    gradient: "from-purple-500/10 to-transparent"
  }
];

const microPoints = [
  "Revenue focused",
  "Problem solver",
  "Fast learner",
  "Entrepreneurial thinking",
  "Strong ownership mentality"
];

export default function AboutWhyMe() {
  return (
    <section className="relative w-full bg-[#F8FAFC]/50 py-24 lg:py-32 overflow-hidden border-t border-slate-100">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Copywriting Left (Col 5) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 lg:sticky lg:top-32">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 mb-4"
              >
                <div className="h-0.5 w-6 bg-emerald-500 rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase">
                  Why Me
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-[1.1]"
              >
                Built for <span className="text-emerald-500">Growth</span>, <br />
                Grounded in Execution
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium"
              >
                A commercially driven young professional with hands-on experience turning opportunities into measurable results across business, sales, and operational environments.
              </motion.p>
            </div>

            {/* Micro Points Checklist */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              {microPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500/80 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="pt-4"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 text-sm font-black text-slate-900 hover:text-emerald-600 transition-colors uppercase tracking-widest group"
              >
                <span>Read My Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Cards Right (Col 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, ...springConfig }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  boxShadow: "0 40px 80px -12px rgba(15, 23, 42, 0.08)"
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-8 lg:p-10 shadow-sm transition-all"
              >
                {/* Decorative Pill Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.gradient} rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex-shrink-0 h-16 w-16 rounded-[1.25rem] bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                    {pillar.icon}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed max-w-lg">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}

            {/* Premium CTA Card (Small) */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 1 }}
               className="mt-4 rounded-[2rem] bg-slate-900 p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-white/5 to-transparent skew-x-12" />
              <div className="relative z-10 flex items-center space-x-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-400">Ready to execute</p>
                  <p className="text-lg font-black tracking-tight">Looking for a Growth Role?</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 rounded-xl bg-white px-6 py-3 text-sm font-black text-slate-900 shadow-xl transition-all"
              >
                Hire Devin
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
