import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowUpRight, 
  Download, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Users, 
  Zap, 
  Briefcase,
  Menu,
  X,
  ChevronRight,
  Globe
} from 'lucide-react';

/* 
 * DESIGN SYSTEM CONSTANTS
 */
const springConfig = { stiffness: 110, damping: 18 };
const accentColor = "#10B981";
const primaryColor = "#0F172A";

const metrics = [
  { label: 'Revenue Generated', value: '76M+', icon: <TrendingUp className="w-4 h-4 text-emerald-500" /> },
  { label: 'Partnerships Built', value: '10+', icon: <Users className="w-4 h-4 text-emerald-500" /> },
  { label: 'Sales Growth', value: '200%', icon: <Zap className="w-4 h-4 text-emerald-500" /> },
  { label: 'Portfolio Units', value: '2,000+', icon: <Briefcase className="w-4 h-4 text-emerald-500" /> },
];

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#casestudies' },
  { label: 'Certifications', href: '#certs' },
  { label: 'Contact', href: '#contact' },
];

/**
 * HEADER COMPONENT
 */
const Header = ({ onExperienceClick, onCertificationsClick, onContactClick, onCaseStudiesClick }: { onExperienceClick?: () => void, onCertificationsClick?: () => void, onContactClick?: () => void, onCaseStudiesClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#experience' && onExperienceClick) {
      e.preventDefault();
      onExperienceClick();
    } else if (href === '#certs' && onCertificationsClick) {
      e.preventDefault();
      onCertificationsClick();
    } else if (href === '#contact' && onContactClick) {
      e.preventDefault();
      onContactClick();
    } else if (href === '#casestudies') {
      if (onCaseStudiesClick) {
        e.preventDefault();
        onCaseStudiesClick();
      } else {
        const element = document.getElementById('casestudies');
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-xl bg-white/70 border-b border-slate-200' : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-2xl font-black tracking-tighter text-slate-900"
            whileHover={{ scale: 1.05 }}
          >
            DH<span className="text-emerald-500">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
              >
                {link.label}
                <motion.span 
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.a>
            ))}
          </nav>

          {/* Hire Me CTA */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => onContactClick && onContactClick()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? <X key="close" className="w-6 h-6" /> : <Menu key="open" className="w-6 h-6" />}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsOpen(false);
                  }}
                  className="text-lg font-semibold text-slate-900 flex items-center justify-between group"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  onContactClick && onContactClick();
                  setIsOpen(false);
                }}
                className="mt-4 w-full rounded-2xl bg-emerald-500 py-4 text-center font-bold text-white shadow-lg shadow-emerald-500/20"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

/**
 * HERO SECTION COMPONENT
 */
const Hero = ({ onExperienceClick, onContactClick }: { onExperienceClick?: () => void, onContactClick?: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          key="bg-orb-1"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[120px]"
        />
        <motion.div 
          key="bg-orb-2"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.4] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Left */}
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, ...springConfig }}
              className="inline-flex items-center space-x-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 backdrop-blur-sm shadow-sm w-fit"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">
                📍 Bekasi, Indonesia · Open to Opportunities
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ...springConfig }}
                className="text-5xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-7xl xl:text-8xl"
              >
                Business Talent <br />
                <span className="text-emerald-500">Driving Growth.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ...springConfig }}
                className="max-w-xl text-lg lg:text-xl leading-relaxed text-slate-500 font-medium"
              >
                Hands-on experience in sales execution, reseller growth, e-commerce revenue generation, and commercial operations across multiple industries.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, ...springConfig }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <motion.button
                onClick={onExperienceClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex w-full sm:w-auto items-center justify-center space-x-2 rounded-2xl bg-slate-900 px-8 py-4.5 text-sm font-bold text-white shadow-2xl shadow-slate-900/30 transition-all hover:bg-slate-800"
              >
                <span>View Experience</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full sm:w-auto items-center justify-center space-x-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4.5 text-sm font-bold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </motion.button>

              <motion.button
                onClick={() => onContactClick && onContactClick()}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-sm font-black text-slate-900 hover:text-emerald-600 transition-colors uppercase tracking-widest pl-4"
              >
                <span>Let's Connect</span>
                <span className="text-xl">→</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Panel - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, ...springConfig }}
            className="relative lg:justify-self-end "
            style={{ y: y2 }}
          >
            {/* Visual Balance Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[100px]" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 5 }}
                className="group relative rounded-[3rem] border border-slate-200 bg-white/40 p-3 backdrop-blur-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] transition-all duration-500"
                style={{ perspective: 1000 }}
              >
                <div className="relative h-[450px] w-full max-w-[380px] overflow-hidden rounded-[2.5rem] bg-slate-900 sm:h-[550px] sm:w-[420px]">
                  {/* Decorative Profile Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-emerald-600/20 to-slate-955" />
                  <img 
                    src="https://picsum.photos/seed/executive/800/1000" 
                    alt="Devin Profile" 
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-slate-955 via-slate-955/40 to-transparent" />

                  {/* Profile Details */}
                  <div className="absolute bottom-0 p-10 text-white w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <h2 className="text-4xl font-black tracking-tight leading-none mb-2">Devin Hibatullah</h2>
                      <p className="text-sm font-bold tracking-widest text-emerald-400 uppercase">
                        Business Development & Sales
                      </p>
                    </motion.div>
                    
                    <div className="mt-8 flex flex-wrap gap-3">
                      <div className="flex items-center space-x-2 rounded-full bg-slate-900/40 px-4 py-2 border border-white/30 backdrop-blur-md">
                        <Globe className="w-3 h-3 text-emerald-300" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Unpad Alumni</span>
                      </div>
                      <div className="flex items-center space-x-2 rounded-full bg-emerald-500/20 px-4 py-2 border border-emerald-500/40 backdrop-blur-md">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Revenue Focused</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, ...springConfig }}
                  className="absolute -top-6 -right-6 hidden sm:block"
                >
                  <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Efficiency</p>
                        <p className="text-sm font-black text-slate-900 leading-tight">+45% YoY</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, ...springConfig }}
                  className="absolute -bottom-6 -left-6 hidden sm:block"
                >
                  <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-md">
                    <div className="flex items-center space-x-3">
                      <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-emerald-500 shadow-lg">
                        <img src="https://picsum.photos/seed/dev/200" alt="Avatar" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Active</p>
                        </div>
                        <p className="text-sm font-black text-slate-900 leading-tight">Open for Projects</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/*
 * MAIN EXPORT
 */
export default function HeaderHero({ onExperienceClick, onCertificationsClick, onContactClick, onCaseStudiesClick }: { onExperienceClick?: () => void, onCertificationsClick?: () => void, onContactClick?: () => void, onCaseStudiesClick?: () => void }) {
  return (
    <div className="relative w-full">
      <Header onExperienceClick={onExperienceClick} onCertificationsClick={onCertificationsClick} onContactClick={onContactClick} onCaseStudiesClick={onCaseStudiesClick} />
      <Hero onExperienceClick={onExperienceClick} onContactClick={onContactClick} />
    </div>
  );
}
