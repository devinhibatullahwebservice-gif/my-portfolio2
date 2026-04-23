'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Boxes, 
  Zap, 
  MapPin, 
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  MessageSquare,
  Award,
  Globe,
  Layout,
  CheckCircle2,
  ShieldCheck,
  Target
} from 'lucide-react';

/* 
 * DATA DEFINITIONS
 */

const metrics = [
  { label: "Revenue Generated", value: "76M+", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Reseller Partners Built", value: "10+", icon: <Users className="w-5 h-5" /> },
  { label: "Units Managed", value: "2,000+", icon: <Boxes className="w-5 h-5" /> },
  { label: "Fundraising Results", value: "35M+", icon: <Zap className="w-5 h-5" /> },
];

const profExperiences = [
  {
    company: "Wirausaha Merdeka — Bola Ubi Jatinangor",
    role: "Project Lead & Sales Manager",
    period: "Jul 2023 – Dec 2023",
    location: "Sumedang, Indonesia",
    highlights: [
      "Increased sales from 40 to 120 units/day in 48 hours",
      "Generated IDR 500K–700K daily revenue",
      "Managed 5-person team"
    ],
    accent: "emerald"
  },
  {
    company: "Marthabucks.id",
    role: "Sales & Distribution Supervisor",
    period: "Aug 2018 – Aug 2022",
    location: "Bekasi, Indonesia",
    highlights: [
      "Built 10 reseller partners",
      "Managed sales operations and inventory",
      "Expanded local distribution reach"
    ],
    accent: "blue"
  },
  {
    company: "Parfumerie del Archipelago",
    role: "E-Commerce Specialist",
    period: "Aug 2020 – Jan 2022",
    location: "Jakarta, Indonesia",
    highlights: [
      "Generated IDR 76M revenue",
      "Optimized 20+ product listings",
      "Improved conversion performance"
    ],
    accent: "emerald"
  },
  {
    company: "Badtrip Division",
    role: "Head of Merchandising & Production",
    period: "Jan 2021 – Jan 2023",
    location: "Bandung, Indonesia",
    highlights: [
      "Managed 2,000+ apparel units",
      "Coordinated 3–5 vendors",
      "Delivered projects on deadline"
    ],
    accent: "orange"
  }
];

const orgExperiences = [
  {
    organization: "Paguyuban Trader Indonesia Bersatu",
    role: "Team Supervisor",
    period: "Sep 2024 – Feb 2025",
    location: "Jakarta, Indonesia",
    highlights: [
      "Coordinated 200+ members",
      "Structured reporting workflows",
      "Supported internal operations"
    ]
  },
  {
    organization: "Jatinangor Social Festival",
    role: "Head of Fundraising",
    period: "Jul 2022 – Oct 2022",
    location: "Sumedang, Indonesia",
    highlights: [
      "Generated IDR 15–25M fundraising",
      "Led fundraising team",
      "Increased event revenue"
    ]
  },
  {
    organization: "Prabu UNPAD",
    role: "Staff of Information Management",
    period: "Jun 2022 – Aug 2022",
    location: "Sumedang, Indonesia",
    highlights: [
      "Designed admissions website interface",
      "Improved UX navigation",
      "Supported 6,000+ users exposure"
    ]
  },
  {
    organization: "PACES UNPAD",
    role: "Fundraising Staff",
    period: "Jun 2021 – Oct 2021",
    location: "Sumedang, Indonesia",
    highlights: [
      "Raised IDR 20M+",
      "Managed logistics and sales execution",
      "Supported social programs"
    ]
  }
];

const skills = [
  "Leadership", "Negotiation", "Sales Execution", "Team Coordination", 
  "Fundraising", "Growth Strategy", "Operations", "Lead Generation", 
  "Problem Solving", "Communication"
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

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#f1f5f9_1.5px,transparent_1.5px)] [background-size:48px_48px] opacity-40" />
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-60"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl space-y-8">
            <SectionLabel>Experience</SectionLabel>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-black text-slate-900 tracking-tighter sm:text-7xl lg:text-8xl leading-[1.05]"
            >
              Work Experience & <br />
              <span className="text-emerald-500 text-shadow-glow">Leadership Journey</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium"
            >
              Hands-on commercial execution combined with leadership, coordination, and growth-focused experiences.
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
        </div>
      </section>

      {/* 2. HIGHLIGHT METRICS */}
      <section className="py-12 bg-slate-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center text-center md:items-start md:text-left space-y-2"
              >
                <div className="flex items-center space-x-2 text-emerald-400 opacity-60">
                  {metric.icon}
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{metric.label}</span>
                </div>
                <p className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROFESSIONAL EXPERIENCE SECTION */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 lg:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl space-y-4">
              <SectionLabel>Professional Experience</SectionLabel>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
                Real Business Exposure <br />
                with <span className="text-emerald-500">Measurable Results</span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">
                Hands-on roles across entrepreneurship, sales, e-commerce, operations, and growth execution.
              </p>
            </div>
            <div className="hidden lg:block pb-4">
               <Briefcase className="w-24 h-24 text-slate-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {profExperiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, ...springConfig }}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              >
                 <div className="md:col-span-3 pt-2">
                    <p className="text-sm font-black text-slate-900 tracking-tight">{exp.period}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                       <MapPin className="w-3.5 h-3.5" />
                       {exp.location}
                    </div>
                 </div>

                 <div className="md:col-span-1 flex flex-col items-center">
                    <div className={`h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-${exp.accent}-500 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 z-10 overflow-hidden`}>
                       <Award className="w-6 h-6" />
                    </div>
                    <div className="h-full w-px bg-slate-100 group-last:hidden mt-4" />
                 </div>

                 <div className="md:col-span-8">
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="rounded-3xl border border-slate-100 bg-white p-8 lg:p-10 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 relative overflow-hidden"
                    >
                       <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity">
                          <TrendingUp className="w-32 h-32 text-slate-900" />
                       </div>
                       
                       <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">{exp.company}</h3>
                            <p className="text-lg font-bold text-emerald-600 mt-1">{exp.role}</p>
                          </div>
                          
                          <ul className="space-y-4">
                             {exp.highlights.map((h, i) => (
                               <li key={i} className="flex items-start gap-4 text-slate-600 font-medium">
                                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                                  <span>{h}</span>
                               </li>
                             ))}
                          </ul>
                       </div>
                    </motion.div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ORGANIZATIONAL EXPERIENCE SECTION */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 lg:mb-24 max-w-3xl space-y-4">
            <SectionLabel>Organizational Experience</SectionLabel>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
              Leadership, Teamwork & <br />
              <span className="text-slate-400">Community Initiatives</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">
              Experiences that built communication, fundraising, coordination, and people management skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {orgExperiences.map((exp, index) => (
              <motion.div
                key={exp.organization}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                 <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                       <p className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em]">{exp.period}</p>
                       <h3 className="text-xl font-black text-slate-900 tracking-tight">{exp.organization}</h3>
                       <p className="text-sm font-bold text-slate-500">{exp.role}</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300">
                       <Users className="w-5 h-5" />
                    </div>
                 </div>

                 <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium leading-relaxed">
                         <div className="h-1 w-1 rounded-full bg-slate-300" />
                         <span>{h}</span>
                      </li>
                    ))}
                 </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SKILLS BUILT THROUGH EXPERIENCE */}
      <section className="py-24 lg:py-32 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                 <SectionLabel>Output</SectionLabel>
                 <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                    Professional Skills Scaled Through Reality
                 </h2>
                 <p className="text-lg text-slate-500 font-medium">
                    A combination of hard sales execution, operational systems, and interpersonal leadership derived from real-world pressure.
                 </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-3xl">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 + index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: '#0F172A', color: '#FFFFFF' }}
                    className="px-6 py-3 rounded-2xl border border-slate-100 bg-white text-sm font-bold text-slate-900 shadow-sm cursor-default transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="relative py-24 lg:py-40 bg-slate-900 text-white overflow-hidden">
         <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
         </div>

         <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 1.5 }}
               className="space-y-8"
            >
               <h2 className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl leading-none">
                  Ready to Create Impact <br />
                  <span className="text-emerald-400">from Day One</span>
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
        .text-emerald-500 { color: #10B981; }
        .text-emerald-600 { color: #059669; }
        .text-emerald-400 { color: #34D399; }
        .bg-emerald-500 { background-color: #10B981; }
        .bg-emerald-50 { background-color: #ECFDF5; }
        .border-emerald-100 { border-color: #D1FAE5; }

        .text-blue-500 { color: #3B82F6; }
        .bg-blue-50 { background-color: #EFF6FF; }

        .text-orange-500 { color: #F97316; }

        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
        }
      `}</style>
    </div>
  );
}
