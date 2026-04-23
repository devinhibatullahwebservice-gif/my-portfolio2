'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUp, 
  Linkedin, 
  Mail, 
  MapPin, 
  MessageCircle,
  TrendingUp,
  Zap
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

const Footer = ({ onNavigate }: { onNavigate?: (page: 'home' | 'case-studies' | 'experience' | 'certifications' | 'contact') => void }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const internalNavigate = (e: React.MouseEvent, page: 'home' | 'case-studies' | 'experience' | 'certifications' | 'contact') => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#', page: 'home' as const },
    { name: 'Experience', href: '#', page: 'experience' as const },
    { name: 'Case Studies', href: '#', page: 'case-studies' as const },
    { name: 'Certifications', href: '#', page: 'certifications' as const },
    { name: 'Contact', href: '#', page: 'contact' as const },
    { name: 'Skills', href: '#skills' },
  ];

  const contactItems = [
    { name: 'Email', value: 'devinhbt@gmail.com', icon: <Mail size={14} />, href: 'mailto:devinhbt@gmail.com' },
    { name: 'WhatsApp', value: '+62 881-0220-9410', icon: <MessageCircle size={14} />, href: 'https://wa.me/6288102209410' },
    { name: 'LinkedIn', value: 'linkedin.com/in/devin-hibatullah', icon: <Linkedin size={14} />, href: 'https://linkedin.com/in/devin-hibatullah' },
    { name: 'Location', value: 'Bekasi, Indonesia', icon: <MapPin size={14} />, href: '#' },
  ];

  const opportunities = [
    'Business Development',
    'Sales',
    'Management Trainee',
    'Growth Roles',
    'Commercial Operations',
  ];

  return (
    <footer className="relative bg-[#020617] text-[#F8FAFC] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Premium Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.1]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* Column 1: Brand & Identity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
                  <span className="font-black text-white text-lg">DH</span>
                </div>
                <h2 className="text-2xl font-black text-white tracking-widest uppercase">
                  Devin<span className="text-emerald-500">.</span>
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-[13px] font-bold leading-relaxed text-[#94A3B8] max-w-[18rem]">
                  Business Development Talent Focused on <span className="text-white underline decoration-emerald-500/50 underline-offset-4">Revenue Growth</span> & Market Expansion.
                </p>
                <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-[#94A3B8]/40 italic">
                  <Zap className="h-3 w-3 text-emerald-500" />
                  <span>Driven by Execution</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {[
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/devin-hibatullah', label: 'LinkedIn' },
                { icon: <Mail size={18} />, href: 'mailto:devinhbt@gmail.com', label: 'Email' },
                { icon: <MessageCircle size={18} />, href: 'https://wa.me/6288102209410', label: 'WhatsApp' }
              ].map((social) => (
                <motion.a 
                  key={social.label}
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  href={social.href}
                  className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/5 bg-white/5 text-[#94A3B8] transition-all hover:text-white hover:border-emerald-500/30"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Strategic Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col space-y-8"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Navigation</h4>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => link.page ? internalNavigate(e, link.page) : null}
                    whileHover={{ x: 6, color: '#FFFFFF' }}
                    className="text-[13px] font-bold text-[#94A3B8] transition-all flex items-center group"
                  >
                    <span className="h-px w-0 bg-emerald-500 mr-0 transition-all group-hover:w-4 group-hover:mr-2" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Channels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Contact Channels</h4>
            <div className="flex flex-col space-y-6">
              {contactItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 6, color: '#FFFFFF' }}
                  className="group flex items-start space-x-4 transition-all"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/5 text-emerald-500/80 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#94A3B8]/40 mb-0.5">{item.name}</span>
                    <span className="text-[13px] font-bold text-[#94A3B8] group-hover:text-white transition-colors">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Professional Interests */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col space-y-8"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Open For</h4>
            <div className="flex flex-col space-y-3">
              {opportunities.map((opt) => (
                <div 
                  key={opt}
                  className="group flex items-center space-x-3 cursor-default"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500 transition-all duration-500" />
                  <span className="text-[13px] font-bold text-[#94A3B8] transition-all group-hover:text-white group-hover:translate-x-1">
                    {opt}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <div className="rounded-2xl bg-white/5 border border-white/5 p-4 flex items-center space-x-3">
                <div className="flex -space-x-2">
                   {[1,2].map(i => (
                     <div key={i} className="h-6 w-6 rounded-full border-2 border-[#020617] bg-slate-800" />
                   ))}
                </div>
                <p className="text-[10px] font-bold text-[#94A3B8]">Join <span className="text-white">Active</span> Conversations</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright & Engine */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-bold text-[#94A3B8]/40">
            <p>© 2026 DEVIN HIBATULLAH. ALL RIGHTS RESERVED.</p>
            <div className="hidden md:block h-3 w-px bg-white/10" />
            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span>CRAFTED WITH PRECISION</span>
            </div>
          </div>

          <div className="flex items-center space-x-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]/30">
              NEXT.JS + TAILWIND CSS
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#94A3B8] shadow-2xl transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-400 group"
              aria-label="Back to Top"
            >
              <ArrowUp size={20} className="group-hover:animate-bounce" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
