import React from 'react';
import { X, CheckCircle, Download } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  assetName: string;
}

const LeadMagnetModal: React.FC<Props> = ({ isOpen, onClose, assetName }) => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6 text-center">
              <div className="mx-auto w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                <Download size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Get Your Free Resource</h3>
              <p className="text-slate-600 text-sm">
                Enter your email to instantly receive <br/>
                <span className="font-semibold text-brand-700">"{assetName}"</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Business Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Send Me the Guide
              </button>
              <p className="text-xs text-center text-slate-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce-short">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Check your inbox!</h3>
            <p className="text-slate-600 mb-6">
              We've sent <strong>{assetName}</strong> to <span className="text-slate-900 font-medium">{email}</span>.
            </p>
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadMagnetModal;