import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import TrustBar from './components/TrustBar';
import ServiceDetail from './components/ServiceDetail';
import TrustedAlliances from './components/TrustedAlliances';
import WhyChooseUs from './components/WhyChooseUs';
import AssessmentModal from './components/AssessmentModal'; // Import the Agent
import { SERVICE_CATALOG, COMPANY_NAME } from './constants';
import { ServiceItem, Pillar } from './types';
import { ArrowRight, CheckCircle, Zap, Shield, Users } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'detail'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false); // State for the modal
  
  // Handle scrolling to hash if present after view change
  useEffect(() => {
    if (currentView === 'catalog') {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [currentView]);

  // Helper to get selected item
  const selectedItem = SERVICE_CATALOG.find(i => i.id === selectedServiceId);

  const navigateToService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleNav = (view: string, sectionId?: string) => {
    if (view === 'home') setCurrentView('home');
    
    if (view === 'catalog') {
      setCurrentView('catalog');
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    }
    
    if (view === 'services') setCurrentView('catalog');
    
    // Support navigation directly to an item detail
    if (view === 'item' && sectionId) {
       setSelectedServiceId(sectionId);
       setCurrentView('detail');
       window.scrollTo(0, 0);
    }
  };

  const groupedByPillar = SERVICE_CATALOG.reduce((acc, service) => {
    if (!acc[service.pillar]) acc[service.pillar] = [];
    acc[service.pillar].push(service);
    return acc;
  }, {} as Record<Pillar, ServiceItem[]>);

  return (
    <Layout onNavigate={handleNav}>
      <AssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />

      {currentView === 'home' && (
        <>
          {/* Hero */}
          <section className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute -top-[50%] -right-[10%] w-[80%] h-[150%] bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
               <div className="absolute top-[20%] -left-[10%] w-[60%] h-[100%] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Sovereign AI, Quality & Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Trust</span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
                We deliver strategic talent acceleration and high-trust solutions globally, serving clients across the Middle East, North America, Europe, Asia Pacific, and Latin America through our trusted alliance network.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <button 
                  onClick={() => setCurrentView('catalog')}
                  className="px-8 py-4 bg-brand-600 text-white font-bold rounded-lg shadow-lg hover:bg-brand-500 hover:shadow-brand-500/30 transition-all transform hover:-translate-y-1"
                >
                  Explore Capabilities
                </button>
                <button 
                  onClick={() => setIsAssessmentOpen(true)} 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  Free Assessment
                </button>
              </div>
            </div>
          </section>

          <TrustBar />

          {/* Pillars Overview */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">Strategic Pillars</h2>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We operate at the intersection of quality, intelligence, and compliance.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group cursor-pointer" onClick={() => setCurrentView('catalog')}>
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Talent Acceleration</h3>
                  <p className="text-slate-600 mb-6">Upskill your teams with ISTQB® certifications and specialized AI-testing methodologies.</p>
                  <span className="text-brand-600 font-semibold text-sm flex items-center">View Programs <ArrowRight size={16} className="ml-1" /></span>
                </div>

                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group cursor-pointer" onClick={() => setCurrentView('catalog')}>
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Advisory</h3>
                  <p className="text-slate-600 mb-6">Transform your processes with TMMi assessments and AI maturity frameworks.</p>
                  <span className="text-brand-600 font-semibold text-sm flex items-center">View Consulting <ArrowRight size={16} className="ml-1" /></span>
                </div>

                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group cursor-pointer" onClick={() => setCurrentView('catalog')}>
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Blockchain & Compliance</h3>
                  <p className="text-slate-600 mb-6">Secure blockchain payments, smart contract audits, and wallet integration.</p>
                  <span className="text-brand-600 font-semibold text-sm flex items-center">View Solutions <ArrowRight size={16} className="ml-1" /></span>
                </div>
              </div>
            </div>
          </section>

          {/* Trusted Alliances Section */}
          <TrustedAlliances />

          {/* Why Choose Us Section */}
          <WhyChooseUs />
        </>
      )}

      {currentView === 'catalog' && (
        <div className="bg-slate-50 min-h-screen">
          <div className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold text-slate-900">Service Catalog</h1>
              <p className="mt-4 text-slate-600">Browse our comprehensive list of {SERVICE_CATALOG.length}+ specialized services.</p>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {Object.entries(groupedByPillar).map(([pillar, services]) => {
                
                // Group by Category
                const categories = Array.from(new Set(services.map(s => s.category)));
                const pillarId = pillar.toLowerCase().replace(/\s/g, '-').replace(/[&]/g, 'and');

                return (
                  <div key={pillar} className="scroll-mt-24" id={pillarId}>
                    {/* Pillar Heading */}
                    <div className="flex items-center gap-4 mb-10">
                      <div className="h-px bg-slate-300 flex-grow"></div>
                      <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight text-center max-w-3xl">{pillar}</h2>
                      <div className="h-px bg-slate-300 flex-grow"></div>
                    </div>

                    <div className="space-y-12">
                      {categories.map(category => {
                        const inCategory = services.filter(s => s.category === category);
                        // Group by SubCategory
                        const subCategories = Array.from(new Set(inCategory.map(s => s.subCategory || 'Core Offerings')));
                        // Generate ID for deep linking
                        const categoryId = category.toLowerCase().replace(/\s/g, '-').replace(/[&]/g, 'and').replace(/[(),]/g, '');

                        return (
                          <div key={category} id={categoryId} className="scroll-mt-32 bg-slate-100/50 rounded-2xl p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-brand-500 pl-4">{category}</h3>

                            <div className="space-y-8">
                              {subCategories.map(subCat => {
                                const items = inCategory.filter(s => (s.subCategory || 'Core Offerings') === subCat);
                                
                                return (
                                  <div key={subCat}>
                                    {subCat !== 'Core Offerings' && (
                                       <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center">
                                         <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                                         {subCat}
                                       </h4>
                                    )}
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                      {items.map((service) => (
                                        <div 
                                          key={service.id}
                                          onClick={() => navigateToService(service.id)}
                                          className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-brand-300 transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
                                        >
                                          {/* Hover highlight */}
                                          <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                          
                                          <div className="mb-4">
                                            <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2 py-1 rounded-md">
                                              {service.subCategory || service.category}
                                            </span>
                                          </div>
                                          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                                            {service.title}
                                          </h3>
                                          <p className="text-slate-600 text-sm flex-grow mb-6 line-clamp-3 leading-relaxed">
                                            {service.description}
                                          </p>
                                          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                              <Zap size={12} className="text-yellow-500" />
                                              Lead Magnet Inside
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                                               <ArrowRight size={16} className="text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {currentView === 'detail' && selectedItem && (
        <ServiceDetail 
          item={selectedItem} 
          onBack={() => setCurrentView('catalog')} 
        />
      )}
    </Layout>
  );
};

export default App;