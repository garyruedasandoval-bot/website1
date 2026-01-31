import React, { useRef, useState } from 'react';
import { COMPANY_NAME, COMPANY_ADDRESS, LINKEDIN_URL, SERVICE_CATALOG } from '../constants';
import { Pillar } from '../types';
import { Linkedin, Menu, X, ShieldCheck, MessageCircle, ChevronDown, ChevronRight, CornerDownRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePillar?: string;
  onNavigate: (view: string, sectionId?: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Helper to extract structure for the Mega Menu
  const getPillarData = (pillar: Pillar) => {
    const services = SERVICE_CATALOG.filter(s => s.pillar === pillar);
    // Unique Categories
    const categories = Array.from(new Set(services.map(s => s.category)));
    
    return categories.map(cat => {
      const catServices = services.filter(s => s.category === cat);
      // Unique SubCategories within Category
      const subCategories = Array.from(new Set(catServices.map(s => s.subCategory || 'General')));
      
      return {
        name: cat,
        subCategories: subCategories.map(sub => ({
          name: sub,
          items: catServices.filter(s => (s.subCategory || 'General') === sub)
        }))
      };
    });
  };

  const NAV_MENUS = [
    {
      id: 'talent',
      label: 'Talent Acceleration & AI Program',
      pillar: Pillar.TALENT_ACCELERATION,
      structure: getPillarData(Pillar.TALENT_ACCELERATION)
    },
    {
      id: 'advisory',
      label: 'Strategic Advisory Transformation & AI',
      pillar: Pillar.STRATEGIC_ADVISORY,
      structure: getPillarData(Pillar.STRATEGIC_ADVISORY)
    },
    {
      id: 'crypto',
      label: 'Crypto Finance',
      pillar: Pillar.CRYPTO_FINANCE,
      structure: getPillarData(Pillar.CRYPTO_FINANCE)
    }
  ];

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleCategoryClick = (categoryName: string) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    // ID gen matching App.tsx
    const id = categoryName.toLowerCase().replace(/\s/g, '-').replace(/[&]/g, 'and').replace(/[(),]/g, '');
    onNavigate('catalog', id);
  };

  const handleItemClick = (serviceId: string) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    onNavigate('item', serviceId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
          Chat with an Expert
        </span>
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer gap-2 shrink-0 mr-4" 
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-brand-900 rounded-lg flex items-center justify-center text-white">
                <ShieldCheck size={24} />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight hidden sm:block">{COMPANY_NAME}</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 h-full">
              <button 
                onClick={() => onNavigate('home')} 
                className="px-2 py-2 text-xs lg:text-sm font-medium text-slate-600 hover:text-brand-600 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                Home
              </button>
              
              {NAV_MENUS.map((menu) => (
                <div 
                  key={menu.id}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(menu.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className={`flex items-center gap-1 px-2 py-2 text-xs lg:text-sm font-bold transition-colors rounded-md whitespace-nowrap ${
                      activeDropdown === menu.id 
                        ? 'text-brand-600 bg-brand-50' 
                        : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                    }`}
                    onClick={() => {
                        const pillarId = menu.pillar.toLowerCase().replace(/\s/g, '-').replace(/[&]/g, 'and');
                        onNavigate('catalog', pillarId);
                    }}
                  >
                    {menu.label} <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === menu.id ? 'rotate-180' : ''}`} />
                  </button>

                  {/* MEGA MENU DROPDOWN */}
                  {activeDropdown === menu.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90vw] max-w-7xl bg-white rounded-xl shadow-2xl border border-slate-100 p-8 animate-fade-in-up mt-1 z-50 overflow-y-auto max-h-[80vh]">
                       <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45"></div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                         {menu.structure.map((category, idx) => (
                           <div key={idx} className="space-y-4 break-inside-avoid">
                             {/* Category Header */}
                             <button 
                               onClick={() => handleCategoryClick(category.name)}
                               className="text-left font-bold text-slate-900 text-sm uppercase tracking-wide border-b-2 border-brand-500 pb-2 w-full hover:text-brand-600 transition-colors"
                             >
                               {category.name}
                             </button>

                             <div className="space-y-6">
                               {category.subCategories.map((sub, sIdx) => (
                                 <div key={sIdx}>
                                   {/* SubCategory Header (if different from Category and not General) */}
                                   {sub.name !== 'General' && sub.name !== category.name && (
                                     <h5 className="font-semibold text-xs text-slate-500 mb-2 flex items-center gap-1">
                                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div> 
                                        {sub.name}
                                     </h5>
                                   )}
                                   
                                   {/* Items */}
                                   <ul className="space-y-2">
                                     {sub.items.map((item, iIdx) => (
                                       <li key={iIdx}>
                                         <button 
                                           onClick={() => handleItemClick(item.id)}
                                           className="text-left w-full text-sm text-slate-600 hover:text-brand-600 hover:bg-slate-50 px-2 py-1 rounded transition-colors flex items-start group"
                                         >
                                           <span className="mt-1.5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-brand-400">
                                             <CornerDownRight size={10} />
                                           </span>
                                           <span className="leading-snug">{item.title}</span>
                                         </button>
                                       </li>
                                     ))}
                                   </ul>
                                 </div>
                               ))}
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}
                </div>
              ))}

              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="ml-2 text-slate-600 hover:text-[#0077b5] transition-colors p-2">
                <Linkedin size={20} />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-700 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-lg max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} 
              className="block w-full text-left font-bold text-lg text-slate-900 py-2 border-b border-slate-100"
            >
              Home
            </button>
            
            <div className="space-y-8 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">Service Menu</span>
              
              {NAV_MENUS.map((menu) => (
                <div key={menu.id} className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-base bg-slate-50 p-2 rounded-lg border-l-4 border-brand-500">
                    {menu.label}
                  </h4>
                  
                  <div className="pl-2 space-y-6">
                    {menu.structure.map((cat, idx) => (
                      <div key={idx} className="space-y-2 border-l border-slate-200 pl-4">
                        <button 
                           onClick={() => handleCategoryClick(cat.name)}
                           className="font-bold text-sm text-slate-800 hover:text-brand-600 block mb-2"
                        >
                          {cat.name}
                        </button>

                        {cat.subCategories.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-2">
                             {sub.name !== 'General' && sub.name !== cat.name && (
                                <h6 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">{sub.name}</h6>
                             )}
                             <ul className="space-y-2">
                               {sub.items.map((item, iIdx) => (
                                 <li key={iIdx}>
                                   <button 
                                     onClick={() => handleItemClick(item.id)}
                                     className="text-left text-sm text-slate-600 hover:text-brand-600 flex items-start gap-2"
                                   >
                                     <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                                     {item.title}
                                   </button>
                                 </li>
                               ))}
                             </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 font-medium text-[#0077b5] pt-4 border-t border-slate-100"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-bold text-lg mb-4">{COMPANY_NAME}</h3>
              <p className="max-w-xs text-slate-400 mb-6">
                Accelerating business transformation through high-trust AI implementation, quality engineering, and compliant financial solutions.
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://picsum.photos/100/100" 
                  alt="Founder" 
                  className="w-12 h-12 rounded-full border-2 border-slate-700"
                />
                <div>
                  <p className="text-sm font-medium text-white">The Founder</p>
                  <a href={LINKEDIN_URL} className="text-xs text-brand-500 hover:text-brand-400">Connect on LinkedIn</a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => onNavigate('catalog')} className="hover:text-white transition-colors">Full Catalog</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <address className="not-italic text-sm text-slate-400 space-y-2">
                <p>{COMPANY_ADDRESS}</p>
                <p>contact@businessinnovations.co</p>
              </address>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;