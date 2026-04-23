'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  BadgeCheck, 
  Globe, 
  Zap, 
  TrendingUp, 
  Search, 
  Mail, 
  Linkedin, 
  MessageSquare, 
  ArrowRight, 
  Download,
  ShieldCheck,
  MousePointer2,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Layout,
  Smartphone
} from 'lucide-react';

/* 
 * DATA DEFINITIONS
 */

const featuredCerts = [
  {
    title: "Certified Exporter",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    category: "Business / Trade",
    highlight: "Industry-recognized export competency validation, covering international trade operations and compliance.",
    accent: "emerald",
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Digital Marketing",
    issuer: "Harisenin",
    category: "Growth / Digital",
    highlight: "Comprehensive mastery of modern acquisition channels, SEO/SEM, and data-driven growth strategies.",
    accent: "blue",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: "TOEIC / English Proficiency",
    issuer: "Professional Level",
    category: "Communication",
    highlight: "Professional working communication capability, enabling seamless coordination in international business settings.",
    accent: "purple",
    icon: <Mail className="w-8 h-8" />
  }
];

const allCerts = [
  {
    title: "Certified Exporter",
    issuer: "BNSP",
    category: "Business / International Trade",
    icon: <Globe className="w-5 h-5" />,
    accent: "emerald"
  },
  {
    title: "Business & Career Development",
    issuer: "MySkill",
    category: "Professional Growth",
    icon: <Award className="w-5 h-5" />,
    accent: "blue"
  },
  {
    title: "Digital Marketing",
    issuer: "Harisenin",
    category: "Marketing / Growth",
    icon: <TrendingUp className="w-5 h-5" />,
    accent: "emerald"
  },
  {
    title: "Web Builder & UI/UX",
    issuer: "Habiskerja",
    category: "Digital / Product",
    icon: <Layout className="w-5 h-5" />,
    accent: "purple"
  },
  {
    title: "TOEIC / English Proficiency",
    issuer: "Professional Level",
    category: "Communication",
    icon: <MessageSquare className="w-5 h-5" />,
    accent: "slate"
  },
  {
    title: "Continuous Learning",
    issuer: "Self Development",
    category: "Modern Stack",
    icon: <Sparkles className="w-5 h-5" />,
    accent: "indigo"
  }
];

const skillCategories = [
  {
    title: "Business & Trade",
    skills: ["Export Knowledge", "Business Fundamentals", "Career Development"],
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "Growth & Digital",
    skills: ["Digital Marketing", "UI/UX Awareness", "Web Tools"],
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Communication",
    skills: ["English Proficiency", "Presentation Readiness", "Professional Communication"],
    icon: <MessageSquare className="w-5 h-5" />
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

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#f1f5f9_1.5px,transparent_1.5px)] [background-size:48px_48px]" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-8">
              <SectionLabel>Certifications</SectionLabel>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-black text-slate-900 tracking-tighter sm:text-7xl lg:text-8xl leading-[1.05]"
              >
                Continuous Learning <br />
                Backed by <span className="text-emerald-500">Real Credentials</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium"
              >
                A curated set of industry-recognized certifications across business, export, digital growth, communication, and modern productivity tools.
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
                  <Download className="w-4 h-4" /> Download Resume
                </button>
              </motion.div>
            </div>

            {/* Premium Visual Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="lg:col-span-4 relative hidden lg:block"
            >
              <div className="relative aspect-square w-full">
                 {/* Floating Badge Visuals */}
                 <motion.div 
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-0 right-0 h-40 w-40 rounded-[2.5rem] bg-emerald-500 shadow-2xl shadow-emerald-500/30 flex items-center justify-center text-white border-4 border-white"
                 >
                    <BadgeCheck className="w-20 h-20" />
                 </motion.div>
                 <motion.div 
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-10 left-0 h-48 w-48 rounded-[3rem] bg-slate-900 shadow-2xl flex flex-col items-center justify-center text-white border-4 border-slate-800 p-8 text-center"
                 >
                    <BookOpen className="w-10 h-10 text-emerald-400 mb-2" />
                    <p className="text-[10px] font-black uppercase tracking-widest leading-none">Growth Mindset</p>
                    <p className="text-xl font-bold mt-1">Verified</p>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CREDENTIALS */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Featured Credentials</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
            {featuredCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, ...springConfig }}
                whileHover={{ y: -12 }}
                className="group relative flex flex-col rounded-[2.5rem] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm transition-all hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/5 overflow-hidden"
              >
                {/* Accent Glow */}
                <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-${cert.accent}-500/10 blur-[80px] group-hover:bg-${cert.accent}-500/20 transition-all`} />
                
                <div className="mb-8 flex items-center justify-between">
                   <div className={`h-16 w-16 rounded-2xl bg-${cert.accent}-50 text-${cert.accent}-600 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                      {cert.icon}
                   </div>
                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ShieldCheck className="w-4 h-4" />
                   </div>
                </div>

                <div className="space-y-4 flex-1">
                   <span className={`px-3 py-1 rounded-full bg-${cert.accent}-50 text-${cert.accent}-600 text-[10px] font-black uppercase tracking-widest border border-${cert.accent}-100`}>
                      {cert.category}
                   </span>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">{cert.title}</h3>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest text-[11px] mb-2">{cert.issuer}</p>
                   <p className="text-slate-500 font-medium leading-relaxed italic">"{cert.highlight}"</p>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between">
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Validated Asset</span>
                   <MousePointer2 className="w-4 h-4 text-slate-200 group-hover:text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FULL CERTIFICATIONS GRID */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>All Validations</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {allCerts.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-xl transition-all h-full"
              >
                 <div className={`h-12 w-12 shrink-0 rounded-xl bg-${cert.accent}-50 text-${cert.accent}-600 flex items-center justify-center border border-${cert.accent}-100 group-hover:rotate-12 transition-transform`}>
                    {cert.icon}
                 </div>
                 <div className="space-y-1">
                    <h4 className="text-sm font-black text-slate-900 tracking-tight">{cert.title}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cert.issuer}</p>
                 </div>
                 <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SKILL CATEGORIES */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:64px_64px] opacity-20" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px]" />
         </div>

         <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="text-center mb-16 lg:mb-24 space-y-4">
               <SectionLabel>Competency Pillars</SectionLabel>
               <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Skill Categories Overlaid</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {skillCategories.map((cat, index) => (
                 <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-xl p-10 space-y-8 hover:bg-white/10 transition-colors"
                 >
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                       {cat.icon}
                    </div>
                    <h3 className="text-xl font-black tracking-tight">{cat.title}</h3>
                    <ul className="space-y-4">
                       {cat.skills.map(skill => (
                         <li key={skill} className="flex items-center space-x-3 text-slate-400 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>{skill}</span>
                         </li>
                       ))}
                    </ul>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. LEARNING MINDSET */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
              <div className="flex justify-center">
                 <div className="h-16 w-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <Sparkles className="w-8 h-8" />
                 </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                 Always Learning, <br /> Always Improving
              </h2>
              <div className="relative">
                 <div className="absolute -left-10 top-0 text-7xl text-emerald-100 font-serif -z-10">“</div>
                 <p className="text-2xl text-slate-500 font-medium leading-relaxed italic z-10">
                    I believe high-performing professionals continuously upgrade business, digital, and communication capabilities to stay valuable in fast-changing markets.
                 </p>
                 <div className="absolute -right-10 bottom-0 text-7xl text-emerald-100 font-serif -z-10 rotate-180">“</div>
              </div>
              <div className="h-px w-24 bg-slate-200 mx-auto mt-12" />
           </motion.div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="relative py-24 lg:py-40 bg-slate-900 text-white overflow-hidden">
         <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]" />
         </div>

         <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-8"
            >
               <h2 className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl leading-none">
                  Looking for a <br />
                  <span className="text-emerald-400">Proactive Candidate?</span>
               </h2>
               <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto font-medium">
                  Open to Business Development, Sales, Management Trainee, and growth-focused opportunities.
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
      </section>

      {/* Manual Colors Helper */}
      <style>{`
        .bg-emerald-50 { background-color: #ecfdf5; }
        .text-emerald-500 { color: #10b981; }
        .text-emerald-600 { color: #059669; }
        .text-emerald-400 { color: #34d399; }
        .border-emerald-100 { border-color: #d1fae5; }
        .bg-emerald-500 { background-color: #10b981; }

        .bg-blue-50 { background-color: #eff6ff; }
        .text-blue-500 { color: #3b82f6; }
        .text-blue-600 { color: #2563eb; }
        .border-blue-100 { border-color: #dbeafe; }
        .bg-blue-500 { background-color: #3b82f6; }

        .bg-purple-50 { background-color: #f5f3ff; }
        .text-purple-500 { color: #8b5cf6; }
        .text-purple-600 { color: #7c3aed; }
        .border-purple-100 { border-color: #ede9fe; }
        .bg-purple-500 { background-color: #8b5cf6; }

        .bg-slate-50 { background-color: #f8fafc; }
        .border-slate-100 { border-color: #f1f5f9; }
        .bg-indigo-50 { background-color: #eef2ff; }
        .text-indigo-600 { color: #4f46e5; }
        .border-indigo-100 { border-color: #e0e7ff; }
      `}</style>
    </div>
  );
}
