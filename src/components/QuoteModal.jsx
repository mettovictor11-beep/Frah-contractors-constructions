import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, defaultService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || 'Commercial Construction',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-navy-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <h3 className="text-xl font-bold font-heading">
            Request a Free Quote
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Frah Contractors &bull; We Build Your Dreams
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 font-heading">
                Quote Request Received
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Thank you! We have received your request and will follow up with you at <strong>{formData.phone}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-3 px-5 py-2 rounded-lg bg-navy-900 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Kenya Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="(\+254|0)?[17][0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}"
                    title="Enter a Kenyan mobile number, such as +254 712 345 678 or 0712 345 678."
                    placeholder="+254 712 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Project Type
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 bg-white"
                >
                  <option>Commercial Construction</option>
                  <option>Residential Developments</option>
                  <option>Civil & Infrastructure</option>
                  <option>Renovations & Structural Upgrades</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Brief Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Location, approximate scope, or timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg bg-brand-700 hover:bg-brand-800 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>{loading ? 'Submitting...' : 'Send Quote Request'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3 h-3 text-slate-400" />
                <span>No obligation. Strictly confidential.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
