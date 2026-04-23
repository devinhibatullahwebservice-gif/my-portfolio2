'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, useMotionValue, useTransform, animate } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Zap, 
  Briefcase, 
  PieChart, 
  Globe2, 
  ArrowUpRight 
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

const mainMetrics = [
  { 
    id: 1,
    value: 76, 
    suffix: 'M+', 
    label: 'Revenue Generated', 
    description: 'Direct contribution through sales execution and market expansion.',
    icon: <TrendingUp className="w-6 h-6 text-emerald-500" /> 
  },
  { 
    id: 2,
    value: 10, 
    suffix: '+', 
    label: 'Reseller Partners', 
    description: 'Systematic pipeline development and channel management.',
    icon: <Users className="w-6 h-6 text-emerald-500" /> 
  },
  { 
    id: 3,
    value: 200, 
    suffix: '%', 
    label: 'Sales Growth', 
    description: 'Record-breaking performance achieved in a 48-hour window.',
    icon: <Zap className="w-6 h-6 text-emerald-500" /> 
  },
  { 
    id: 4,
    value: 2000, 
    suffix: '+', 
    label: 'Units Managed', 
    description: 'Overseeing high-volume distribution and inventory operations.',
    icon: <Briefcase className="w-6 h-6 text-emerald-500" /> 
  }
];

const miniStats = [
  { label: 'Fundraising Results', value: '35M+', icon: <PieChart className="w-3 h-3" /> },
  { label: 'Industries Exposure', value: '5+', icon: <Globe2 className="w-3 h-3" /> },
];

/**
 * COUNT-UP ANIMATION COMPONENT
 */
const CountUpValue = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

/**
 * MAIN COMPONENT
 */
export default function CredibilityMetrics() {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background Subtle Wash */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_80%)]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50/40 rounded-full blur-[120px]" />
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
              Proven Impact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl lg:text-6xl mb-6"
          >
            Results That Speak <br className="hidden sm:block" />
            for Themselves
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl"
          >
            Hands-on commercial execution across sales, e-commerce, channel growth, and operations with measurable outcomes.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {mainMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, ...springConfig }}
              whileHover={{ 
                y: -8, 
                scale: 1.01,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)"
              }}
              className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-8 transition-all hover:bg-white hover:border-emerald-100"
            >
              {/* Card Accent Line */}
              <div className="absolute top-0 left-12 right-12 h-[2px] bg-emerald-500/0 group-hover:bg-emerald-500/100 transition-all duration-500 overflow-hidden rounded-full" />
              
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/50 group-hover:scale-110 transition-transform duration-500">
                    {metric.icon}
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-5 h-5 text-slate-300" />
                  </motion.div>
                </div>

                <div className="flex items-baseline space-x-1 mb-2">
                  <span className="text-5xl font-black tracking-tighter text-slate-900 group-hover:text-emerald-600 transition-colors duration-500">
                    <CountUpValue value={metric.value} />
                  </span>
                  <span className="text-3xl font-black text-slate-400 group-hover:text-emerald-500 transition-colors">
                    {metric.suffix}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3 tracking-tight">
                  {metric.label}
                </h3>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed">
                {metric.description}
              </p>

              {/* Subtle Bottom Glow */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-emerald-400/0 blur-md group-hover:bg-emerald-400/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Footer Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center gap-4 lg:gap-8 border-t border-slate-100 pt-12"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            Supplementary Metrics
          </span>
          <div className="flex flex-wrap gap-4">
            {miniStats.map((stat) => (
              <div 
                key={stat.label}
                className="flex items-center space-x-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  {stat.icon}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-black text-slate-900">{stat.value}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
