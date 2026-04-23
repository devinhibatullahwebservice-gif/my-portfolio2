'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  BarChart3, 
  ShoppingBag, 
  Network, 
  Target, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  Linkedin, 
  Mail,
  Calendar,
  Briefcase,
  PieChart,
  TrendingUp,
  Award,
  Globe,
  Download
} from 'lucide-react';

/* 
 * DATA DEFINITIONS
 */

const caseStudies = [
  {
    id: "sales-growth",
    category: "Sales Growth",
    title: "How I Increased Daily Sales by 200% in 48 Hours",
    summary: "Repositioned distribution strategy and introduced bundling to rapidly improve campus snack sales.",
    metric: "+200%",
    metricLabel: "Daily Sales Growth",
    details: {
      snapshot: {
        industry: "F&B / Campus Retail",
        period: "Jul 2023 – Dec 2023",
        role: "Project Lead & Sales Manager",
        kpi: "Sales Volume per Day"
      },
      problem: "Sales stagnated at 40 units/day. The existing distribution points had low traffic, and the offer lacked urgency or perceived value for the campus demographic.",
      analysis: "Observed that peak traffic was concentrated in specific areas during narrow windows. The product was seen as a 'solo purchase' with a weak price-to-volume ratio.",
      strategy: "Shifted focus to a 'high-density distribution' model, concentrating efforts during lunch and afternoon breaks. Engineered a 'Value Bundle' to increase the average transaction value.",
      execution: "Redesigned the entire sales route and promo deployment within 48 hours. Trained the team on active engagement techniques rather than passive waiting.",
      results: [
        { label: "Baseline", value: "40 units" },
        { label: "Post-Execution", value: "120 units" },
        { label: "Timeframe", value: "48 Hours" }
      ],
      lessons: "Fast execution often beats overplanning in small retail environments. Agility is the primary competitive advantage in high-density markets."
    },
    accent: "emerald",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: "ecommerce-growth",
    category: "E-Commerce Growth",
    title: "Generating IDR 76M Through Marketplace Optimization",
    summary: "Improved listings, pricing, and conversion strategy to drive strong marketplace revenue.",
    metric: "76M+",
    metricLabel: "IDR Generated",
    details: {
      snapshot: {
        industry: "E-Commerce / Marketplace",
        period: "Aug 2020 – Jan 2022",
        role: "E-Commerce Specialist",
        kpi: "Total Gross Revenue"
      },
      problem: "The store suffered from low search visibility and an extremely weak conversion-to-visit ratio compared to category competitors.",
      analysis: "Competitor analysis revealed superior listing imagery, more aggressive pricing logic, and faster chat response rates that built higher buyer confidence.",
      strategy: "A three-pillar optimization plan: Search Engine Optimization (SEO) for listings, Dynamic Pricing adjustments, and a zero-latency customer response system.",
      execution: "Reworked 20+ specialized high-margin products. Optimized titles with high-intent keywords and integrated customer testimonials into product imagery.",
      results: [
        { label: "Revenue", value: "IDR 76M" },
        { label: "Visibility", value: "+150%" },
        { label: "Conversion", value: "2.4x" }
      ],
      lessons: "Conversion grows when trust, visibility, and pricing align. Small optimization tweaks in title keywords can drive massive revenue shifts."
    },
    accent: "blue",
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    id: "channel-expansion",
    category: "Channel Expansion",
    title: "Building 10 Active Reseller Partners from Zero",
    summary: "Designed reseller recruitment and onboarding system to scale beyond direct selling.",
    metric: "10+",
    metricLabel: "Reseller Partners",
    details: {
      snapshot: {
        industry: "Beverage / Distribution",
        period: "Aug 2018 – Aug 2022",
        role: "Sales & Distribution Supervisor",
        kpi: "Active Partner Count"
      },
      problem: "Revenue was hitting a ceiling because the model relied entirely on my personal direct-selling capacity. There was no leverage.",
      analysis: "Identified a segment of the market (secondary sellers) who had reach but no inventory. The bottleneck was the lack of a standardized partnership framework.",
      strategy: "Created the 'Partner Accelerator' system—a structured recruitment and onboarding kit that made it easy for anyone to start selling our products.",
      execution: "Proactively recruited, vetted, and provided training materials to potential sellers. Built a centralized communication hub for order fulfillments.",
      results: [
        { label: "Partners", value: "10 Active" },
        { label: "Indirect Rev", value: "40% Share" },
        { label: "Retention", value: "100%" }
      ],
      lessons: "Channels scale faster than solo selling. Building systems for others to succeed is the most efficient path to market expansion."
    },
    accent: "purple",
    icon: <Network className="w-6 h-6" />
  }
];

const springConfig = { stiffness: 100, damping: 20 };

/* 
 * COMPONENTS
 */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center space-x-2 mb-4"
  >
    <div className="h-0.5 w-6 bg-emerald-500 rounded-full" />
    <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 uppercase">
      {children}
    </span>
  </motion.div>
);

export default function CaseStudiesPage() {
  const [activeStory, setActiveStory] = useState<string | null>(null);

  const scrollToStory = (id: string) => {
    setActiveStory(id);
    const element = document.getElementById(`story-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#f1f5f9_1.5px,transparent_1.5px)] [background-size:64px:64px] opacity-40" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <SectionLabel>Case Studies</SectionLabel>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-black text-slate-900 tracking-tighter sm:text-7xl lg:text-8xl leading-[1.05]"
              >
                Real Business <br />
                Problems Solved <br />
                with <span className="text-emerald-500">Real Results</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium"
              >
                A curated portfolio of growth-focused projects across sales, e-commerce, channel expansion, and commercial execution.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-bold shadow-2xl shadow-slate-900/20 hover:bg-slate-800 transition-all flex items-center gap-2">
                  Contact Me <ArrowRight className="w-4 h-4" />
                </a>
                <button className="px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download CV
                </button>
              </motion.div>
            </div>

            {/* Premium Visual Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="relative aspect-square w-full rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl">
                 {/* Mock Dashboard Illustration */}
                 <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                       <div className="h-8 w-24 bg-white/10 rounded-lg animate-pulse" />
                       <div className="h-8 w-8 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                    </div>
                    <div className="space-y-4">
                       <div className="h-10 w-full bg-white/5 rounded-xl" />
                       <div className="h-40 w-full bg-gradient-to-t from-emerald-500/20 to-transparent rounded-2xl flex items-end p-4">
                          <div className="flex gap-2 w-full h-full items-end">
                             {[40, 60, 45, 90, 75, 120].map((h, i) => (
                               <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 animate={{ height: `${h}%` }}
                                 className="flex-1 bg-emerald-400/80 rounded-t-sm"
                               />
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="absolute bottom-10 right-10 p-6 bg-white rounded-3xl shadow-xl">
                    <TrendingUp className="w-8 h-8 text-emerald-500 mb-2" />
                    <p className="text-[10px] font-black uppercase text-slate-400">Conversion</p>
                    <p className="text-2xl font-black text-slate-900">+200%</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED GRID */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]/50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Quick Insights</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.button
                key={study.id}
                onClick={() => scrollToStory(study.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, ...springConfig }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col text-left rounded-[2.5rem] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm transition-all hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className={`rounded-full bg-${study.accent}-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-${study.accent}-600 border border-${study.accent}-100`}>
                    {study.category}
                  </span>
                  <div className={`h-12 w-12 rounded-2xl bg-white shadow-inner flex items-center justify-center text-${study.accent}-500 transition-colors group-hover:scale-110`}>
                    {study.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4 group-hover:text-emerald-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-8 flex-1">
                  {study.summary}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{study.metricLabel}</span>
                    <p className={`text-4xl font-black text-${study.accent}-500 tracking-tighter`}>{study.metric}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED STORY BLOCKS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              id={`story-${study.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start scroll-mt-32"
            >
              {/* Detailed Left Panel (Snapshot) */}
              <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
                 <div className="space-y-6">
                    <div className={`h-16 w-16 rounded-[1.5rem] bg-${study.accent}-50 text-${study.accent}-500 flex items-center justify-center shadow-inner`}>
                      {study.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 leading-tight mb-2 tracking-tight">
                        {study.title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full bg-${study.accent}-50 text-${study.accent}-600 text-[10px] font-black uppercase tracking-widest border border-${study.accent}-100`}>
                          Project Details
                        </span>
                      </div>
                    </div>
                 </div>

                 <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 space-y-4">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Snapshot</p>
                    <div className="grid grid-cols-1 gap-4">
                       <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-3">
                          <span className="font-bold text-slate-500">Industry</span>
                          <span className="font-black text-slate-900">{study.details.snapshot.industry}</span>
                       </div>
                       <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-3">
                          <span className="font-bold text-slate-500">Period</span>
                          <span className="font-black text-slate-900">{study.details.snapshot.period}</span>
                       </div>
                       <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-3">
                          <span className="font-bold text-slate-500">Role</span>
                          <span className="font-black text-slate-900 text-right max-w-[150px]">{study.details.snapshot.role}</span>
                       </div>
                       <div className="flex justify-between items-center text-sm">
                          <span className="font-bold text-slate-500">Main KPI</span>
                          <span className="font-black text-emerald-600 uppercase tracking-widest text-[11px]">{study.details.snapshot.kpi}</span>
                       </div>
                    </div>
                 </div>

                 {/* Results Micro Grid */}
                 <div className="grid grid-cols-3 gap-4">
                    {study.details.results.map((r, i) => (
                      <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm text-center">
                         <p className="text-[10px] font-black uppercase text-slate-300 tracking-tighter mb-1">{r.label}</p>
                         <p className={`text-sm font-black text-${study.accent}-500`}>{r.value}</p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Detailed Right Content (Storytelling) */}
              <div className="lg:col-span-8 space-y-16">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
                    {/* Problem */}
                    <div className="space-y-4">
                       <div className="flex items-center space-x-3 text-slate-900">
                          <Target className="w-5 h-5 text-red-500" />
                          <h4 className="font-black uppercase tracking-widest text-sm">The Problem</h4>
                       </div>
                       <p className="text-lg text-slate-600 leading-relaxed font-medium">
                          {study.details.problem}
                       </p>
                    </div>

                    {/* Analysis */}
                    <div className="space-y-4">
                       <div className="flex items-center space-x-3 text-slate-900">
                          <PieChart className="w-5 h-5 text-blue-500" />
                          <h4 className="font-black uppercase tracking-widest text-sm">Analysis</h4>
                       </div>
                       <p className="text-lg text-slate-600 leading-relaxed font-medium">
                          {study.details.analysis}
                       </p>
                    </div>

                    {/* Strategy */}
                    <div className="space-y-4">
                       <div className="flex items-center space-x-3 text-slate-900">
                          <Award className="w-5 h-5 text-emerald-500" />
                          <h4 className="font-black uppercase tracking-widest text-sm">Strategy</h4>
                       </div>
                       <p className="text-lg text-slate-600 leading-relaxed font-medium">
                          {study.details.strategy}
                       </p>
                    </div>

                    {/* Execution */}
                    <div className="space-y-4">
                       <div className="flex items-center space-x-3 text-slate-900">
                          <Zap className="w-5 h-5 text-orange-500" />
                          <h4 className="font-black uppercase tracking-widest text-sm">Execution</h4>
                       </div>
                       <p className="text-lg text-slate-600 leading-relaxed font-medium">
                          {study.details.execution}
                       </p>
                    </div>
                 </div>

                 {/* Lessons Learned Banner */}
                 <div className={`relative overflow-hidden rounded-[2.5rem] bg-${study.accent}-900 p-8 lg:p-12 text-white`}>
                    <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-white/5 to-transparent skew-x-12" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                       <div className={`h-16 w-16 shrink-0 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-${study.accent}-400 border border-white/20`}>
                          <CheckCircle2 className="w-8 h-8" />
                       </div>
                       <div>
                          <h5 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 mb-2">Lessons Learned</h5>
                          <p className="text-2xl font-bold tracking-tight italic">
                            "{study.details.lessons}"
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="relative py-24 lg:py-40 bg-slate-900 text-white overflow-hidden">
         <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
         </div>

         <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
               <SectionLabel>Collaborate</SectionLabel>
               <h2 className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl leading-none">
                  Looking for a <br />
                  <span className="text-emerald-400">Growth-Oriented</span> <br />
                  Business Talent?
               </h2>
               <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto font-medium">
                  Open to Business Development, Sales, Commercial Operations, and Growth-focused opportunities.
               </p>
               
               <div className="flex flex-wrap items-center justify-center gap-6 pt-12">
                  <motion.a
                     href="https://wa.me/"
                     whileHover={{ scale: 1.05, y: -4 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-10 py-5 bg-emerald-500 text-white rounded-2xl text-lg font-black shadow-2xl shadow-emerald-500/20 flex items-center gap-3 transition-all hover:bg-emerald-400"
                  >
                     <MessageSquare className="w-6 h-6" /> WhatsApp
                  </motion.a>
                  <motion.a
                     href="https://linkedin.com/"
                     whileHover={{ scale: 1.05, y: -4 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-2xl text-lg font-black backdrop-blur-md flex items-center gap-3 transition-all hover:bg-white hover:text-slate-900"
                  >
                     <Linkedin className="w-6 h-6" /> LinkedIn
                  </motion.a>
                  <motion.a
                     href="mailto:devinhbt@gmail.com"
                     whileHover={{ scale: 1.05, y: -4 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-10 py-5 border border-slate-700 text-slate-400 rounded-2xl text-lg font-black flex items-center gap-3 transition-all hover:border-slate-500 hover:text-white"
                  >
                     <Mail className="w-6 h-6" /> Email Me
                  </motion.a>
               </div>
            </motion.div>
         </div>

         <div className="mt-24 border-t border-white/5 pt-12 text-center overflow-hidden">
            <p className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-700 animate-pulse">
               DEVIN HIBATULLAH · BUSINESS OPERATOR · GROWTH MINDSET
            </p>
         </div>
      </section>

      {/* Helper Styles for dynamic classes */}
      <style>{`
        .bg-emerald-50 { background-color: #ecfdf5; }
        .text-emerald-500 { color: #10b981; }
        .text-emerald-600 { color: #059669; }
        .border-emerald-100 { border-color: #d1fae5; }
        .bg-emerald-900 { background-color: #064e3b; }
        .text-emerald-400 { color: #34d399; }

        .bg-blue-50 { background-color: #eff6ff; }
        .text-blue-500 { color: #3b82f6; }
        .text-blue-600 { color: #2563eb; }
        .border-blue-100 { border-color: #dbeafe; }
        .bg-blue-900 { background-color: #1e3a8a; }
        .text-blue-400 { color: #60a5fa; }

        .bg-purple-50 { background-color: #f5f3ff; }
        .text-purple-500 { color: #8b5cf6; }
        .text-purple-600 { color: #7c3aed; }
        .border-purple-100 { border-color: #ede9fe; }
        .bg-purple-900 { background-color: #4c1d95; }
        .text-purple-400 { color: #a78bfa; }
      `}</style>
    </div>
  );
}
