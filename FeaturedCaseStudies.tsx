'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  BarChart3, 
  ShoppingBag, 
  Network, 
  Target, 
  Zap, 
  CheckCircle2,
  TrendingUp,
  Layout
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

const caseStudies = [
  {
    id: 1,
    category: "Sales Growth",
    title: "How I Increased Daily Sales by 200% in 48 Hours",
    problem: "Sales stagnated at 40 units/day.",
    action: "Redesigned campus distribution route and introduced bundling offers.",
    result: "120 units/day within 2 days.",
    metric: "+200%",
    icon: <TrendingUp className="w-5 h-5" />,
    accent: "emerald"
  },
  {
    id: 2,
    category: "E-Commerce Growth",
    title: "Generating IDR 76M Through Marketplace Optimization",
    problem: "Low visibility and weak conversion performance.",
    action: "Improved listings, pricing, positioning, and responsiveness.",
    result: "IDR 76M revenue generated.",
    metric: "76M+",
    icon: <ShoppingBag className="w-5 h-5" />,
    accent: "blue"
  },
  {
    id: 3,
    category: "Channel Expansion",
    title: "Building 10 Active Reseller Partners from Zero",
    problem: "Growth limited by direct selling model.",
    action: "Created reseller recruitment and onboarding system.",
    result: "10 active reseller partners built.",
    metric: "10+",
    icon: <Network className="w-5 h-5" />,
    accent: "purple"
  }
];

export default function FeaturedCaseStudies({ onViewAll }: { onViewAll?: () => void }) {
  return (
    <section id="casestudies" className="relative w-full bg-white py-24 lg:py-40 overflow-hidden">
      {/* Premium Background Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />
        
        {/* Faint Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 rounded-full border border-slate-100 bg-slate-50/50 px-4 py-1.5 backdrop-blur-sm shadow-sm mb-6"
          >
            <Layout className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
              Case Studies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-black text-[#0F172A] tracking-tighter sm:text-6xl lg:text-7xl mb-8 leading-[1.05]"
          >
            Business Problems Solved <br className="hidden md:block" />
            with <span className="text-emerald-500">Real Results</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg lg:text-xl text-[#64748B] leading-relaxed font-medium max-w-2xl px-4"
          >
            A selection of hands-on projects showcasing growth strategy, execution discipline, and measurable outcomes.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group relative flex flex-col justify-between rounded-[2.5rem] border border-slate-100 bg-[#FFFFFF] p-8 lg:p-11 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-emerald-500/20 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.12)]"
            >
              {/* Card Header */}
              <div className="space-y-7">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full py-1.5 px-4 text-[10px] font-black uppercase tracking-widest bg-${study.accent}-50 text-${study.accent}-600 border border-${study.accent}-100`}>
                    {study.category}
                  </span>
                  <div className={`h-11 w-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-${study.accent}-50 group-hover:text-${study.accent}-500 transition-all duration-300`}>
                    {study.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#0F172A] leading-tight tracking-tight min-h-[4rem]">
                  {study.title}
                </h3>

                {/* Problem / Action / Result Mini Layout */}
                <div className="space-y-5 pt-2 border-t border-slate-50">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                       <Target className="w-3 h-3 text-rose-500/60" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Problem</span>
                    </div>
                    <p className="text-sm font-bold text-[#334155] leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                       <Zap className="w-3 h-3 text-amber-500/60" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</span>
                    </div>
                    <p className="text-sm font-semibold text-[#64748B] leading-relaxed">
                      {study.action}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                       <CheckCircle2 className="w-3 h-3 text-emerald-500/60" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Result</span>
                    </div>
                    <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Big Metric Highlight */}
              <div className="mt-12 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Impact Metric</p>
                  <motion.p 
                    animate={{ 
                      scale: [1, 1.02, 1],
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className={`text-5xl font-black text-${study.accent}-500 tracking-tighter`}
                  >
                    {study.metric}
                  </motion.p>
                </div>
                
                <motion.div 
                  whileHover={{ rotate: 45, x: 2, y: -2 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-xl group-hover:bg-emerald-500 transition-colors duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Gradient Corner Detail */}
              <div className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-${study.accent}-500/5 to-transparent rounded-tr-[2.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            </motion.div>
          ))}
        </div>

        {/* Section Footer CTA */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 1.2, duration: 0.8 }}
           className="mt-20 lg:mt-32 flex flex-col items-center space-y-8"
        >
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          
          <motion.button
            onClick={onViewAll}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center space-x-4 rounded-3xl bg-[#0F172A] px-12 py-5 text-sm font-black text-white shadow-2xl shadow-slate-900/30 transition-all hover:bg-slate-800"
          >
            <span>View All Case Studies</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-[#0F172A] group-hover:bg-white group-hover:scale-110 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Helper Styles for dynamic tailwind classes */}
      <style jsx global>{`
        .bg-emerald-50 { background-color: rgba(16, 185, 129, 0.05); }
        .text-emerald-500 { color: #10b981; }
        .text-emerald-600 { color: #059669; }
        .border-emerald-100 { border-color: rgba(16, 185, 129, 0.1); }
        
        .bg-blue-50 { background-color: rgba(59, 130, 246, 0.05); }
        .text-blue-500 { color: #3b82f6; }
        .text-blue-600 { color: #2563eb; }
        .border-blue-100 { border-color: rgba(59, 130, 246, 0.1); }

        .bg-purple-50 { background-color: rgba(139, 92, 246, 0.05); }
        .text-purple-500 { color: #8b5cf6; }
        .text-purple-600 { color: #7c3aed; }
        .border-purple-100 { border-color: rgba(139, 92, 246, 0.1); }
      `}</style>
    </section>
  );
}
