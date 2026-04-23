/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react'; // 

import HeaderHero from './HeaderHero';
import CredibilityMetrics from './CredibilityMetrics';
import AboutWhyMe from './AboutWhyMe';
import FeaturedCaseStudies from './FeaturedCaseStudies';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsTools from './SkillsTools';
import CertificationsEducation from './CertificationsEducation';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import CaseStudiesPage from './CaseStudiesPage';
import ExperiencePage from './ExperiencePage';
import CertificationsPage from './CertificationsPage';
import ContactPage from './ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'case-studies' | 'experience' | 'certifications' | 'contact'>('home');

  const navigateTo = (page: 'home' | 'case-studies' | 'experience' | 'certifications' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'case-studies') {
    return (
      <main className="min-h-screen bg-white font-sans antialiased text-slate-900">
        <CaseStudiesPage />
        <Footer onNavigate={navigateTo} />
        <button 
          onClick={() => navigateTo('home')}
          className="fixed bottom-8 left-8 z-50 h-14 px-6 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl flex items-center gap-2 hover:bg-slate-800 transition-all border border-white/10"
        >
          ← Back to Home
        </button>
      </main>
    );
  }

  if (currentPage === 'experience') {
    return (
      <main className="min-h-screen bg-white font-sans antialiased text-slate-900">
        <ExperiencePage />
        <Footer onNavigate={navigateTo} />
        <button 
          onClick={() => navigateTo('home')}
          className="fixed bottom-8 left-8 z-50 h-14 px-6 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl flex items-center gap-2 hover:bg-slate-800 transition-all border border-white/10"
        >
          ← Back to Home
        </button>
      </main>
    );
  }

  if (currentPage === 'certifications') {
    return (
      <main className="min-h-screen bg-white font-sans antialiased text-slate-900">
        <CertificationsPage />
        <Footer onNavigate={navigateTo} />
        <button 
          onClick={() => navigateTo('home')}
          className="fixed bottom-8 left-8 z-50 h-14 px-6 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl flex items-center gap-2 hover:bg-slate-800 transition-all border border-white/10"
        >
          ← Back to Home
        </button>
      </main>
    );
  }

  if (currentPage === 'contact') {
    return (
      <main className="min-h-screen bg-white font-sans antialiased text-slate-900">
        <ContactPage />
        <Footer onNavigate={navigateTo} />
        <button 
          onClick={() => navigateTo('home')}
          className="fixed bottom-8 left-8 z-50 h-14 px-6 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl flex items-center gap-2 hover:bg-slate-800 transition-all border border-white/10"
        >
          ← Back to Home
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <HeaderHero 
        onExperienceClick={() => navigateTo('experience')} 
        onCertificationsClick={() => navigateTo('certifications')} 
        onContactClick={() => navigateTo('contact')}
        onCaseStudiesClick={() => navigateTo('case-studies')}
      />
      <CredibilityMetrics />
      <AboutWhyMe />
      <FeaturedCaseStudies onViewAll={() => navigateTo('case-studies')} />
      <ExperienceTimeline onMoreClick={() => navigateTo('experience')} />
      <SkillsTools />
      <CertificationsEducation onViewCerts={() => navigateTo('certifications')} />
      <FinalCTA onContactClick={() => navigateTo('contact')} />
      <Footer onNavigate={navigateTo} />
    </main>
  );
}
