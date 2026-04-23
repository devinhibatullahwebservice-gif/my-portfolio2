/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import HeaderHero from './components/HeaderHero';
import CredibilityMetrics from './components/CredibilityMetrics';
import AboutWhyMe from './components/AboutWhyMe';
import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsTools from './components/SkillsTools';
import CertificationsEducation from './components/CertificationsEducation';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ExperiencePage from './pages/ExperiencePage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';

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
