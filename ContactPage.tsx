'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  Linkedin, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  User,
  Building2,
  Briefcase,
  TrendingUp,
  Zap,
  Target,
  Sparkles,
  ExternalLink,
  Phone
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

const contactMethods = [
  {
    title: "WhatsApp",
    value: "+62 881-0220-9410",
    description: "Fastest response for direct opportunities.",
    icon: <Phone className="w-6 h-6" />,
    action: "Chat Now",
    href: "https://wa.me/6288102209410",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100"
  },
  {
    title: "Email",
    value: "devinhbt@gmail.com",
    description: "Best for interviews and formal communication.",
    icon: <Mail className="w-6 h-6" />,
    action: "Send Email",
    href: "mailto:devinhbt@gmail.com",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    title: "LinkedIn",
    value: "devin-hibatullah",
    description: "Professional networking and profile review.",
    icon: <Linkedin className="w-6 h-6" />,
    action: "View Profile",
    href: "https://linkedin.com/in/devin-hibatullah",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100"
  },
  {
    title: "Location",
    value: "Bekasi, Indonesia",
    description: "Open to remote, hybrid, and on-site opportunities.",
    icon: <MapPin className="w-6 h-6" />,
    action: "Available Now",
    href: "#",
    color: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-200"
  }
];

const availabilityBadges = [
  "Open to Full-Time Roles",
  "Open to Internship / MT",
  "Open to Freelance Projects",
  "Available for Interviews"
];

const whyMeCards = [
  { title: "Commercial Mindset", icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> },
  { title: "Hands-On Execution", icon: <Zap className="w-5 h-5 text-emerald-500" /> },
  { title: "Growth Oriented", icon: <Target className="w-5 h-5 text-emerald-500" /> },
  { title: "Fast Learner", icon: <Sparkles className="w-5 h-5 text-emerald-500" /> }
];

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulated delivery
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="w-full bg-white overflow-hidden pt-20">
      
      {/* SECTION 1 — HERO INTRO */}
      <section className="relative w-full py-20 lg:py-32 bg-white">
        {/* Background Network Graphic (Abstract) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <svg className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" viewBox="0 0 800 800">
                <circle cx="400" cy="400" r="100" fill="currentColor" className="text-slate-900" />
                <circle cx="600" cy="200" r="40" fill="currentColor" className="text-emerald-500" />
                <circle cx="200" cy="200" r="60" fill="currentColor" className="text-slate-900" />
                <line x1="400" y1="400" x2="600" y2="200" stroke="currentColor" strokeWidth="1" />
                <line x1="400" y1="400" x2="200" y2="200" stroke="currentColor" strokeWidth="1" />
                <circle cx="400" cy="600" r="30" fill="currentColor" className="text-emerald-500" />
                <line x1="400" y1="400" x2="400" y2="600" stroke="currentColor" strokeWidth="1" />
            </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-0.5 w-8 bg-emerald-500 rounded-full" />
              <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase">Contact</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8">
              Let’s Connect & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-400">Build Growth</span> Together
            </h1>

            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
              Open to opportunities in Business Development, Sales, Commercial Operations, Management Trainee, and growth-focused roles.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/6288102209410"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all border border-white/10"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" /> WhatsApp Me
              </motion.a>
              <motion.a
                href="mailto:devinhbt@gmail.com"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center gap-2 shadow-xl border border-slate-200 hover:border-emerald-500 transition-all"
              >
                <Mail className="w-5 h-5" /> Email Me
              </motion.a>
            </div>
          </motion.div>

          {/* Abstract Floating Visual */}
          <div className="relative hidden lg:block h-[500px]">
             <motion.div 
               animate={{ 
                 y: [0, -20, 0],
                 rotate: [0, 2, 0]
               }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 right-20 w-64 h-80 rounded-[3rem] bg-slate-900 shadow-2xl overflow-hidden border border-white/10 p-8 flex flex-col justify-between"
             >
                <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900">
                        <UsersIcon />
                    </div>
                    <div className="h-2 w-12 bg-white/10 rounded-full" />
                </div>
                <div>
                    <div className="h-1 w-full bg-white/10 rounded-full mb-2" />
                    <div className="h-1 w-3/4 bg-white/10 rounded-full mb-2" />
                    <div className="h-1 w-1/2 bg-white/10 rounded-full" />
                </div>
                <div className="pt-6 border-t border-white/10">
                    <p className="text-white text-sm font-black mb-1">Commercial Pitch</p>
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Ready for Review</p>
                </div>
             </motion.div>

             <motion.div 
               animate={{ 
                 y: [0, 20, 0],
                 rotate: [0, -3, 0]
               }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-10 left-0 w-64 h-64 rounded-[3rem] bg-white border border-slate-200 shadow-2xl p-8 flex flex-col justify-center gap-4"
             >
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-slate-900 font-black text-xl leading-tight">Incoming <br />Opportunity</p>
                   <p className="text-emerald-500 text-xs font-bold mt-1 uppercase tracking-widest">Active Status</p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CONTACT METHODS GRID ⭐ */}
      <section className="w-full py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, ...springConfig }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className={`h-14 w-14 rounded-2xl ${method.bg} ${method.color} flex items-center justify-center mb-6 shadow-inner border ${method.border} group-hover:scale-110 transition-transform duration-500`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 truncate">{method.title}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{method.value}</p>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                  {method.description}
                </p>
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? "_blank" : undefined}
                  rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-black text-slate-900 group-hover:text-emerald-600 transition-colors"
                >
                  {method.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — AVAILABILITY STATUS */}
      <section className="w-full py-12 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
           <div className="flex flex-col items-center">
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8"
              >
                Current Availability Status
              </motion.h4>
              <div className="flex flex-wrap justify-center gap-4">
                {availabilityBadges.map((badge, index) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-black text-slate-600 uppercase tracking-wider">{badge}</span>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 4 & 5 — FORM + WHY ME GRID */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
             
             {/* LEFT: FORM (Col 7) */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]"
             >
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Send a Direct Message</h2>
                  <p className="text-slate-500 font-medium max-w-md leading-relaxed">
                    Have a specific role or collaboration in mind? Fill out the form and I'll get back to you within 24 hours.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="py-20 flex flex-col items-center text-center space-y-6"
                    >
                        <div className="h-24 w-24 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                           <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">Message Sent!</h3>
                        <p className="text-slate-500 max-w-xs font-medium">Thank you for reaching out. I'll respond as soon as I review your request.</p>
                        <button 
                          onClick={() => setFormState('idle')}
                          className="text-emerald-600 font-black text-sm uppercase tracking-widest hover:underline"
                        >
                          Send another message
                        </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-4">
                             <User className="w-3 h-3" /> Full Name
                          </label>
                          <input 
                            required
                            type="text" 
                            placeholder="Devin Hibatullah"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none font-medium placeholder:text-slate-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-4">
                             <Mail className="w-3 h-3" /> Email Address
                          </label>
                          <input 
                            required
                            type="email" 
                            placeholder="name@company.com"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none font-medium placeholder:text-slate-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-4">
                             <Building2 className="w-3 h-3" /> Company Name
                          </label>
                          <input 
                            type="text" 
                            placeholder="Stripe / Vercel / Amazon"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none font-medium placeholder:text-slate-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-4">
                             <Briefcase className="w-3 h-3" /> Opportunity Type
                          </label>
                          <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none font-black text-slate-900">
                             <option>Full-Time Role</option>
                             <option>Internship / MT</option>
                             <option>Freelance / Project</option>
                             <option>General Networking</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 ml-4">
                           <MessageSquare className="w-3 h-3" /> Your Message
                        </label>
                        <textarea 
                          required
                          rows={5}
                          placeholder="Tell me briefly about the opportunity..."
                          className="w-full px-6 py-4 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none font-medium placeholder:text-slate-300 resize-none"
                        />
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={formState === 'sending'}
                        className={`w-full py-5 rounded-2xl font-black text-white shadow-2xl flex items-center justify-center gap-3 transition-all ${
                          formState === 'sending' ? 'bg-slate-700 cursor-not-allowed' : 'bg-slate-900 active:scale-95 shadow-emerald-500/20'
                        }`}
                      >
                        {formState === 'sending' ? (
                           <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>Send Message <Send className="w-5 h-5 text-emerald-400" /></>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
             </motion.div>

             {/* RIGHT: WHY ME (Col 5) */}
             <div className="lg:col-span-5 space-y-12 py-8 lg:sticky lg:top-32">
                <div>
                   <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Why Consider Devin</h3>
                   <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                     Focused on creating value through execution, ownership, and measurable outcomes.
                   </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyMeCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, ...springConfig }}
                      className="p-6 rounded-3xl bg-[#F8FAFC]/50 border border-slate-100 flex flex-col items-start gap-4 group hover:bg-white hover:shadow-xl transition-all"
                    >
                      <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                        {card.icon}
                      </div>
                      <span className="text-sm font-black text-slate-900 uppercase tracking-wide">{card.title}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Micro CTA card */}
                <div className="p-8 rounded-[2rem] bg-emerald-500 text-slate-900 relative overflow-hidden">
                   <div className="absolute -top-4 -right-4 h-24 w-24 bg-white/20 rounded-full blur-2xl" />
                   <h5 className="text-xl font-black mb-1">Fast Response</h5>
                   <p className="text-sm font-bold opacity-80 mb-6">Available M-F, 9AM-6PM GMT+7 for interviews.</p>
                   <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-slate-900 text-emerald-400 px-4 py-2 rounded-full w-fit">
                      <Sparkles className="w-3.5 h-3.5" /> High Readiness
                   </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CLOSING CTA */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Looking Forward to New Opportunities</h2>
              <p className="text-lg text-slate-400 mb-12 font-medium">
                Whether hiring, collaborating, or networking — I’d be glad to connect. Let’s explore how I can contribute to your business growth objectives.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                 <motion.a 
                   href="https://wa.me/6288102209410"
                   whileHover={{ scale: 1.05 }}
                   className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-400 hover:text-white transition-colors"
                 >
                   <MessageSquare className="w-5 h-5" /> WhatsApp
                 </motion.a>
                 <motion.a 
                   href="https://linkedin.com/in/devin-hibatullah"
                   whileHover={{ scale: 1.05 }}
                   className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors"
                 >
                   <Linkedin className="w-5 h-5" /> LinkedIn
                 </motion.a>
                 <motion.a 
                   href="mailto:devinhbt@gmail.com"
                   whileHover={{ scale: 1.05 }}
                   className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-colors"
                 >
                   <Mail className="w-5 h-5" /> Email
                 </motion.a>
              </div>
            </motion.div>
        </div>
      </section>

    </div>
  );
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
