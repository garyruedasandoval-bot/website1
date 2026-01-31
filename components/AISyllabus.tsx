import React, { useState } from 'react';
import { generateSyllabus } from '../services/geminiService';
import { Sparkles, Loader2, BookOpen } from 'lucide-react';
import { GenerateSyllabusResponse } from '../types';

interface Props {
  courseTitle: string;
  context: string;
}

const AISyllabus: React.FC<Props> = ({ courseTitle, context }) => {
  const [loading, setLoading] = useState(false);
  const [syllabus, setSyllabus] = useState<GenerateSyllabusResponse | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateSyllabus(courseTitle, context);
    setSyllabus(result);
    setLoading(false);
  };

  return (
    <div className="mt-12 bg-gradient-to-br from-slate-900 to-brand-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
            <Sparkles className="text-yellow-300" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">AI Course Planner</h3>
            <p className="text-slate-300 text-sm">Powered by Gemini 3.0 Flash</p>
          </div>
        </div>

        {!syllabus && !loading && (
          <div className="text-center py-8">
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">
              Want to see what you'll learn? Generate a customized, week-by-week syllabus for <strong>{courseTitle}</strong> instantly.
            </p>
            <button 
              onClick={handleGenerate}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-900 font-bold rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-brand-500/20"
            >
              <Sparkles size={18} />
              Generate Syllabus
            </button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="animate-spin text-white mb-4" size={32} />
            <p className="text-slate-300 animate-pulse">Consulting AI Architect...</p>
          </div>
        )}

        {syllabus && (
          <div className="animate-fade-in space-y-6">
            <h4 className="font-semibold text-lg border-b border-white/20 pb-4 mb-4">Proposed Curriculum</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {syllabus.weeks.map((week, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-brand-500/80 px-2 py-0.5 rounded text-white">Week {idx + 1}</span>
                  </div>
                  <h5 className="font-bold text-white mb-2">{week.title}</h5>
                  <ul className="space-y-1">
                    {week.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 w-1 h-1 bg-brand-400 rounded-full shrink-0"></span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pt-4 text-center">
              <button 
                onClick={() => setSyllabus(null)}
                className="text-sm text-slate-400 hover:text-white underline"
              >
                Clear and Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISyllabus;