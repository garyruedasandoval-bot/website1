import React, { useEffect, useState } from 'react';
import { ServiceItem, EnrichedServiceContent } from '../types';
import { ArrowLeft, CheckCircle2, ClipboardCheck, FileText, ChevronRight, Loader2, Target } from 'lucide-react';
import LeadMagnetModal from './LeadMagnetModal';
import AssessmentModal from './AssessmentModal';
import AISyllabus from './AISyllabus';
import { generateServiceContent } from '../services/geminiService';

interface Props {
  item: ServiceItem;
  onBack: () => void;
}

const ServiceDetail: React.FC<Props> = ({ item, onBack }) => {
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = React.useState(false);
  const [content, setContent] = useState<EnrichedServiceContent | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch unique AI content on mount or item change
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    generateServiceContent(item.title, item.description)
      .then(data => {
        if (mounted) {
          setContent(data);
          setLoading(false);
        }
      });
    
    return () => { mounted = false; };
  }, [item.title, item.description]);

  return (
    <div className="bg-white animate-fade-in min-h-screen">
      <LeadMagnetModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
        assetName={item.leadMagnet} 
      />
      <AssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />

      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button 
          onClick={onBack}
          className="flex items-center text-sm text-slate-500 hover:text-brand-600 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
             <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">
              {item.pillar}
            </span>
            <span className="inline-block py-1 px-3 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wide">
              {item.category}
            </span>
            {item.subCategory && (
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide">
                {item.subCategory}
              </span>
            )}
          </div>
         
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {item.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            {item.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 shadow-lg shadow-brand-500/20 transition-all hover:-translate-y-1"
            >
              <FileText className="mr-2" size={20} />
              Download Guide
            </button>
            <button 
              onClick={() => setIsAssessmentOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-300 font-bold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all"
            >
              <ClipboardCheck className="mr-2" size={20} />
              Free Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Content Pillars */}
      <div className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Column */}
            <div className="col-span-2">
              {loading ? (
                <div className="space-y-6">
                  <div className="h-8 bg-slate-200 rounded w-1/3 animate-pulse"></div>
                  <div className="h-24 bg-slate-200 rounded w-full animate-pulse"></div>
                  <div className="h-8 bg-slate-200 rounded w-1/4 animate-pulse mt-8"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-6 bg-slate-200 rounded w-3/4 animate-pulse"></div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Strategic Context</h2>
                  <div className="prose prose-slate max-w-none text-slate-600 mb-10">
                    <p className="text-lg leading-relaxed">{content?.whyItMatters}</p>
                    
                    <div className="bg-white p-6 rounded-xl border-l-4 border-brand-500 shadow-sm my-8">
                       <div className="flex items-start gap-3">
                         <Target className="text-brand-600 mt-1" size={20} />
                         <div>
                           <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Recommended Audience</h4>
                           <p className="text-slate-700">{content?.audience}</p>
                         </div>
                       </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Key Business Benefits</h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {content?.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                          <CheckCircle2 className="text-brand-600 mt-0.5 mr-3 shrink-0" size={20} />
                          <span className="font-medium text-slate-800">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Syllabus is typically static enough to fetch on demand, keeping UI fast */}
                  <AISyllabus courseTitle={item.title} context={item.description} />
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Exclusive Resource</h3>
                  <div className="bg-brand-50 p-4 rounded-lg mb-6 border border-brand-100">
                    <h4 className="font-semibold text-brand-900 text-sm mb-1">{item.leadMagnet}</h4>
                    <p className="text-brand-700 text-xs mt-1">
                      Includes checklists, templates, and actionable insights for {new Date().getFullYear()}.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsLeadModalOpen(true)}
                    className="w-full flex items-center justify-center px-4 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm"
                  >
                    Download Now
                  </button>
                </div>

                <div className="mt-8 bg-slate-900 p-6 rounded-xl text-white shadow-xl relative overflow-hidden">
                   {/* Decorative blob */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                   
                  <h3 className="text-lg font-bold mb-2 relative z-10">Tailored Implementation</h3>
                  <p className="text-slate-300 text-sm mb-6 relative z-10">
                    Every organization is unique. We customize <strong>{item.title}</strong> to fit your tech stack and culture.
                  </p>
                  <a 
                    href="https://calendly.com/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="relative z-10 w-full flex items-center justify-center px-4 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Speak to an Expert <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;