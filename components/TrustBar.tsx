import React from 'react';
import { TESTIMONIALS } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="w-full bg-white py-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Global Standards & Technology Ecosystem
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="h-10 md:h-12 flex items-center justify-center group relative">
               {/* Tooltip hint */}
               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                 {item.name}
               </div>
               
               {item.logo ? (
                 <img src={item.logo} alt={item.name} className="h-full object-contain" />
               ) : (
                 <span className="text-lg font-bold text-slate-500 border border-slate-200 px-4 py-2 rounded-lg bg-slate-50 hover:bg-white hover:border-brand-200 hover:text-brand-600 transition-all cursor-default whitespace-nowrap">{item.name}</span>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;