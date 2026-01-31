import React, { useState, useEffect } from 'react';
import { X, ArrowRight, BarChart3, Loader2, TrendingUp, AlertCircle, ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'calculating' | 'lead-capture' | 'result';

const AssessmentModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>('intro');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setStep('intro');
      setScore(0);
      setAnswers([]);
      setFormData({ name: '', email: '', company: '' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step === 'q1') setStep('q2');
    else if (step === 'q2') setStep('q3');
    else if (step === 'q3') {
      // Calculate final score
      const total = newAnswers.reduce((a, b) => a + b, 0);
      setScore(20 + total); 
      setStep('calculating');
      // Transition to Lead Capture instead of Result
      setTimeout(() => setStep('lead-capture'), 2000);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to save lead
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('result');
    }, 1000);
  };

  const renderContent = () => {
    switch (step) {
      case 'intro':
        return (
          <div className="text-center animate-fade-in">
            <div className="mx-auto w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-6">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Efficiency Assessment</h3>
            <p className="text-slate-600 mb-8">
              This 30-second diagnostic agent will evaluate your current operational maturity in AI, Quality, and Compliance.
            </p>
            <button 
              onClick={() => setStep('q1')}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              Start Diagnosis <ArrowRight size={20} className="ml-2" />
            </button>
            <p className="text-xs text-slate-400 mt-4">AI-Powered Assessment • No Email Required to Start</p>
          </div>
        );

      case 'q1':
        return (
          <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Question 1 of 3</span>
              <span className="text-xs text-slate-400">Quality Engineering</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-8">How automated is your current QA & Testing process?</h3>
            <div className="space-y-3">
              <button onClick={() => handleAnswer(10)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                Mostly Manual / Ad-hoc
              </button>
              <button onClick={() => handleAnswer(20)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                Hybrid (Some Scripts + Manual)
              </button>
              <button onClick={() => handleAnswer(25)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                Fully Automated CI/CD Pipelines
              </button>
            </div>
          </div>
        );

      case 'q2':
        return (
          <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Question 2 of 3</span>
              <span className="text-xs text-slate-400">Compliance</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-8">Do you have real-time visibility into your compliance status (ISO/GDPR)?</h3>
            <div className="space-y-3">
              <button onClick={() => handleAnswer(5)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                No, we rely on periodic audits
              </button>
              <button onClick={() => handleAnswer(15)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                Partial (Some tools, mostly spreadsheets)
              </button>
              <button onClick={() => handleAnswer(25)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                Yes, integrated Real-Time Compliance Dashboards
              </button>
            </div>
          </div>
        );

      case 'q3':
        return (
          <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Question 3 of 3</span>
              <span className="text-xs text-slate-400">Innovation</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-8">Are you utilizing Generative AI for strategic decision making?</h3>
            <div className="space-y-3">
              <button onClick={() => handleAnswer(5)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                No, strictly traditional methods
              </button>
              <button onClick={() => handleAnswer(15)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                Experimenting / POCs only
              </button>
              <button onClick={() => handleAnswer(20)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all font-medium text-slate-700">
                Extensively across the organization
              </button>
            </div>
          </div>
        );

      case 'calculating':
        return (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
            <Loader2 className="animate-spin text-brand-600 mb-6" size={48} />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Analyzing Responses...</h3>
            <p className="text-slate-500">Benchmarking against 2024 Global Standards</p>
          </div>
        );

      case 'lead-capture':
        return (
          <div className="animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="mx-auto w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Analysis Complete</h3>
              <p className="text-slate-600 mt-2 text-sm">
                We've calculated your Strategic Efficiency Score. Enter your details below to unlock your report.
              </p>
            </div>
            
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Work Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  placeholder="Acmo Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Lock size={18} className="mr-2 opacity-80" />
                    Unlock My Score
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-slate-400">
                Your data is secure. We hate spam as much as you do.
              </p>
            </form>
          </div>
        );

      case 'result':
        return (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Your Efficiency Score</h3>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
              {/* User Score */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-slate-700">Your Current Status</span>
                  <span className="font-mono font-bold text-slate-900">{score}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div 
                    className={`h-4 rounded-full transition-all duration-1000 ${score < 50 ? 'bg-orange-500' : 'bg-brand-500'}`} 
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
                {score < 60 && (
                  <div className="mt-2 flex items-center text-xs text-orange-600 font-medium">
                    <AlertCircle size={14} className="mr-1" />
                    Below Industry Average (62%)
                  </div>
                )}
              </div>

              {/* Potential Score */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-brand-700 flex items-center">
                    <TrendingUp size={16} className="text-emerald-500 mr-2" />
                    Potential w/ Alliance
                  </span>
                  <span className="font-mono font-bold text-emerald-600">94%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 relative">
                  <div className="absolute top-0 left-0 h-4 bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 rounded-full w-[94%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                </div>
                <div className="mt-2 text-right text-xs text-emerald-600 font-bold">
                  +{94 - score}% Efficiency Gain Available
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-600 mb-6 text-sm">
                Your score indicates significant room for optimization using our High-Trust AI & Compliance frameworks.
              </p>
              <a 
                href="https://calendly.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Book Strategy Call to Reach 94%
              </a>
              <p className="text-xs text-slate-400 mt-4">
                Free Consultation • Detailed Gap Analysis Included
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-2">
            <ShieldAlert size={18} className="text-brand-600" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Innovations Agent</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          {renderContent()}
        </div>

        {/* Footer Progress (only in quiz steps) */}
        {['q1', 'q2', 'q3'].includes(step) && (
          <div className="px-8 pb-8 pt-0">
             <div className="w-full bg-slate-100 rounded-full h-1.5">
               <div 
                 className="bg-brand-200 h-1.5 rounded-full transition-all duration-300" 
                 style={{ width: step === 'q1' ? '33%' : step === 'q2' ? '66%' : '100%' }}
               ></div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentModal;