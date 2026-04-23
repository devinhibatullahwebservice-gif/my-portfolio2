'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  Phone
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 100, damping: 20 };

export default function FinalCTA({ onContactClick }: { onContactClick?: () => void }) {
  return (
    <section id="contact" className="relative w-full bg-[#0F172A] py-24 lg:py-40 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.2]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content: Copy + CTA */}
          <div className="flex flex-col space-y-8 lg:space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div className="h-0.5 w-6 bg-emerald-500 rounded-full" />
                <span className="text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase">
                  Let’s Connect
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-black text-white tracking-tighter sm:text-6xl lg:text-7xl leading-[1.05]"
              >
                Ready to Contribute <br />
                to <span className="text-emerald-400">Business Growth</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl font-medium"
              >
                Open to opportunities in Business Development, Sales, Commercial Operations, and Growth-focused roles where execution translates to revenue.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => onContactClick && onContactClick()}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center space-x-3 rounded-2xl bg-emerald-500 px-8 py-4.5 text-sm font-black text-white shadow-xl shadow-emerald-500/20 transition-all hover:bg-emerald-400"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Devin</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="https://wa.me/6288102209410" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md px-8 py-4.5 text-sm font-black text-white transition-all hover:bg-white hover:text-slate-900"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                href="mailto:devinhbt@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 rounded-2xl border border-slate-700 px-8 py-4.5 text-sm font-black text-slate-400 hover:text-white hover:border-slate-500 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </motion.a>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/5"
            >
              <div className="flex items-center space-x-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</p>
                  <p className="text-sm font-bold text-white tracking-tight">devinhbt@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                   <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Location</p>
                  <p className="text-sm font-bold text-white tracking-tight">Bekasi, Indonesia</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Premium Contact Card / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[3rem] blur-3xl" />
              
              <div className="relative h-full w-full rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 flex flex-col justify-between overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Sparkles className="w-24 h-24 text-emerald-400" />
                </div>
                
                <div className="space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-black text-white leading-tight">
                    Let's start a <br />
                    conversion focused <br />
                    conversation.
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium text-slate-400">
                    Typically responds within 2-4 hours during business days.
                  </p>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0F172A] bg-slate-800" />
                    ))}
                    <div className="h-8 px-3 rounded-full border-2 border-[#0F172A] bg-emerald-500 flex items-center justify-center">
                      <span className="text-[10px] font-black text-white">ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Graphic */}
                <div className="absolute bottom-0 right-0 left-0 h-1/3 bg-gradient-to-t from-emerald-500/10 to-transparent blur-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-center px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
          © 2026 DEVIN HIBATULLAH · BUSINESS TALENT
        </p>
      </div>
    </section>
  );
}
