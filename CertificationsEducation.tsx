'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  BadgeCheck, 
  ExternalLink,
  ChevronRight,
  Globe,
  Building2,
  Calendar,
  ArrowRight
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

const certifications = [
  {
    title: "Certified Exporter",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    year: "Validated Professional",
    icon: <Globe className="w-5 h-5" />,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Business & Career Development",
    issuer: "MySkill",
    year: "Professional Track",
    icon: <TrendingUpIcon />,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Digital Marketing",
    issuer: "Harisenin",
    year: "Execution Focus",
    icon: <BarChartIcon />,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Web Builder & UI/UX",
    issuer: "Habiskerja",
    year: "Design & Logic",
    icon: <BrushIcon />,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    title: "TOEIC / English Proficiency",
    issuer: "Global Communication",
    year: "Valid Proficiency",
    icon: <BadgeCheck className="w-5 h-5" />,
    color: "text-slate-600",
    bg: "bg-slate-50"
  }
];

function TrendingUpIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> }
function BarChartIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg> }
function BrushIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path><path d="M7.07 14.94c-3.9 3.91-4.04 6.72-4.04 6.72s2.81-.14 6.72-4.04Z"></path><path d="M19 15c0-1.7-1.3-3-3-3"></path></svg> }

export default function CertificationsEducation({ onViewCerts }: { onViewCerts?: () => void }) {
  return (
    <section id="certs" className="relative w-full bg-[#F8FAFC]/50 py-24 lg:py-32 overflow-hidden border-t border-slate-100">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
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
              Credentials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl lg:text-6xl mb-6 leading-[1.1]"
          >
            Education & Professional <br className="hidden sm:block" />
            <span className="text-emerald-500">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl"
          >
            A strong academic foundation combined with practical certifications in business, marketing, and digital tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* EDUCATION LEFT PANEL (Col 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, ...springConfig }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
              {/* Feature Image Placeholder */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-slate-900/20 to-slate-900 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2670&auto=format&fit=crop" 
                  alt="University Academic Building" 
                  className="absolute inset-0 h-full w-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-8 z-20">
                  <div className="flex items-center space-x-2 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-md border border-white/20">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest tracking-tighter">Academic Hub</span>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-10 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> 2020 – 2026
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Universitas Padjadjaran</h3>
                  <p className="text-base font-bold text-emerald-600">Bachelor’s Degree in Economics</p>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <p className="text-sm lg:text-base text-slate-500 leading-relaxed">
                    Focused on business, entrepreneurship, and commercial project exposure. Grounded in economic principles with a drive for practical execution.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Economics", "Business", "Execution"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility Badge */}
            <div className="rounded-3xl border border-dashed border-slate-200 p-6 flex items-center gap-4 bg-white/30 backdrop-blur-sm">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-slate-900 text-emerald-400 ring-4 ring-slate-50">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-500 leading-tight">
                  All digital and academic credentials are <span className="text-slate-900">verified</span> for commercial validity.
                </p>
            </div>
          </motion.div>

          {/* CERTIFICATIONS RIGHT PANEL (Col 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
             {certifications.map((cert, index) => (
               <motion.div
                 key={cert.title}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.8 + index * 0.1, ...springConfig }}
                 whileHover={{ 
                   x: 10, 
                   backgroundColor: '#ffffff',
                   borderColor: '#e2e8f0',
                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)"
                 }}
                 onClick={() => onViewCerts && onViewCerts()}
                 className="group flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-transparent bg-white/40 p-6 lg:p-8 transition-all duration-300 cursor-pointer"
               >
                 <div className="flex items-center gap-6 w-full">
                    <div className={`h-14 w-14 shrink-0 flex items-center justify-center rounded-2xl ${cert.bg} ${cert.color} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm font-bold text-slate-400 tracking-wide uppercase text-[11px] mb-1">
                        {cert.issuer}
                      </p>
                      <div className="hidden sm:inline-flex items-center space-x-1.5 rounded-full bg-slate-50 px-2.5 py-1 border border-slate-100">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{cert.year}</span>
                      </div>
                    </div>
                 </div>
                 
                 <div className="mt-4 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 text-white shadow-lg">
                       <ChevronRight className="w-5 h-5" />
                    </div>
                 </div>
               </motion.div>
             ))}

             {/* Certificate Placeholder card */}
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 1.4 }}
               className="mt-6 p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-emerald-500/10 to-transparent skew-x-12" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                         <Award className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h5 className="text-lg font-black tracking-tight">Full Credentials</h5>
                        <p className="text-xs font-medium text-slate-400">Validated through physical & digital records.</p>
                      </div>
                   </div>
                   <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onViewCerts && onViewCerts()}
                    className="rounded-xl bg-white px-6 py-3 text-sm font-black text-slate-900 shadow-xl transition-all flex items-center gap-2"
                   >
                    View All Certifications <ArrowRight className="w-4 h-4" />
                   </motion.button>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
