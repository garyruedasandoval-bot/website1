import React, { useState } from 'react';
import { VALUE_PROPOSITION } from '../constants';
import { ShieldCheck, Zap, Handshake, TrendingUp, BarChart3, ArrowUpRight } from 'lucide-react';
import AssessmentModal from './AssessmentModal';

const WhyChooseUs: React.FC = () => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <AssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6">
              <ShieldCheck size={16} />
              <span>Unified Value Proposition</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Why Choose Business Innovations & Trusted Alliance?
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              "{VALUE_PROPOSITION.main}"
            </p>

            <div className="space-y-8">
              {VALUE_PROPOSITION.points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-600">
                    {index === 0 && <Zap size={24} />}
                    {index === 1 && <Handshake size={24} />}
                    {index === 2 && <ShieldCheck size={24} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{point.title}</h3>
                    <p className="text-slate-600">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual - Benchmarking / Assessment Preview */}
          <div className="relative">
             {/* Background Gradient Blob */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-indigo-100 rounded-3xl transform rotate-3 scale-105 opacity-60"></div>
             
             <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl min-h-[500px] flex items-center justify-center p-8">
                
                <div className="relative z-10 w-full max-w-md">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand-600 mb-4 shadow-sm">
                      <BarChart3 size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">See Where You Stand</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Benchmark your organization against global standards in AI, Quality, and Compliance.
                    </p>
                  </div>

                  {/* Simulated Scorecard Visual - Light Theme for better clarity */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-inner space-y-8">
                    
                    {/* Metric 1: Industry Average */}
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-slate-500 font-medium">Industry Average Efficiency</span>
                        <span className="text-slate-600 font-mono font-bold">62%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div className="bg-slate-400 h-3 rounded-full w-[62%] relative group">
                             {/* Tooltip on hover */}
                             <div className="absolute -top-8 right-0 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                               Status Quo
                             </div>
                        </div>
                      </div>
                    </div>

                    {/* Metric 2: Potential */}
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-brand-700 font-bold flex items-center gap-2">
                          <TrendingUp size={16} className="text-emerald-500" /> 
                          Your Potential w/ Alliance
                        </span>
                        <span className="text-emerald-600 font-bold font-mono text-lg">94%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-4 relative shadow-inner">
                        <div className="absolute top-0 left-0 h-4 bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 rounded-full w-[94%] shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center justify-end pr-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <p className="text-xs text-emerald-600 mt-2 flex items-center justify-end font-medium">
                        <ArrowUpRight size={12} className="mr-1" />
                        +32% Improvement
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="text-xs text-slate-400 text-center sm:text-left">
                        *Based on 2024 Global Benchmarks
                      </div>
                      <button 
                        onClick={() => setIsAssessmentOpen(true)}
                        className="w-full sm:w-auto text-center text-sm font-bold text-white bg-brand-600 px-6 py-3 rounded-lg hover:bg-brand-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        Get Your Score
                      </button>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;