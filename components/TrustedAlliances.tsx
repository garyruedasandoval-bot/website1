import React from 'react';
import { ALLIANCE_DATA } from '../constants';
import { Layers, Check, Globe, Award, Users } from 'lucide-react';

const TrustedAlliances: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted Alliances</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Business Innovations collaborates with a robust network of partners to provide physical presence in the Middle East and serve clients globally across North America, Europe (UK, EU), Asia Pacific (India, Australia, Japan, Singapore), and Latin America.
          </p>
        </div>

        {/* Pyramid / Stack Concept - Represented as Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ALLIANCE_DATA.map((alliance, index) => (
            <div 
              key={alliance.id} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-brand-500 hover:bg-slate-800/80 transition-all duration-300 group flex flex-col"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && <Award size={24} />}
                  {index === 1 && <Layers size={24} />}
                  {index === 2 && <Globe size={24} />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 h-14 flex items-center">{alliance.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed min-h-[60px]">{alliance.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-6 flex flex-wrap gap-2">
                {alliance.highlights.map((highlight, idx) => (
                  <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700 text-slate-300">
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Distribution Bars */}
              {alliance.distribution && (
                <div className="space-y-3 mb-6 flex-grow">
                   <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Focus Areas</h4>
                   {alliance.distribution.map((item, idx) => (
                     <div key={idx}>
                       <div className="flex justify-between text-xs mb-1">
                         <span className="text-slate-300">{item.label}</span>
                         <span className="text-brand-400 font-mono">{item.percentage}%</span>
                       </div>
                       <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                         <div 
                            className="bg-brand-500 h-1.5 rounded-full transition-all duration-1000"
                            style={{ width: `${item.percentage}%` }}
                         ></div>
                       </div>
                     </div>
                   ))}
                </div>
              )}

              {/* Clients for the last one */}
              {alliance.clients && (
                <div className="mt-auto">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Featured Clients</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
                    {alliance.clients.map(client => (
                      <span key={client} className="flex items-center">
                        <Users size={12} className="mr-1 text-slate-500" /> {client}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedAlliances;