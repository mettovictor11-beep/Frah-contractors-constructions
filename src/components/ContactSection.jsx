import React, { useState } from 'react';
import { Send, CheckCircle2, ClipboardList, Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Frah Contractors, I would like to discuss a project.')}`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Commercial Construction',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 font-heading tracking-tight mt-1">
            Contact Frah Contractors
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Reach out for project consultations, site visits, or general contracting inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 bg-brand-50 border border-brand-100 rounded-2xl p-7 sm:p-8">
            <div className="w-11 h-11 rounded-xl bg-white border border-brand-100 flex items-center justify-center text-brand-700 mb-5">
              <ClipboardList className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-heading text-navy-900">Tell us about the work.</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              A few details about the site, type of project and timing will help frame the first conversation.
            </p>
            <div className="mt-8 pt-5 border-t border-brand-200 text-xs text-slate-600 space-y-3">
              <p>Commercial construction</p>
              <p>Residential builds and renovations</p>
              <p>Civil and infrastructure work</p>
            </div>
            <a
              href={`tel:${companyInfo.phone}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900"
            >
              <Phone className="w-4 h-4" />
              {companyInfo.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-fit items-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-navy-900 font-heading">
                  Message Sent Successfully
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                  Thank you! An engineer will review your inquiry and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white rounded-lg text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 bg-white"
                    >
                      <option>Commercial Construction</option>
                      <option>Residential Developments</option>
                      <option>Civil & Infrastructure</option>
                      <option>Renovations & Structural Upgrades</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Project Details / Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe project location, size, or target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>{loading ? 'Submitting...' : 'Send Inquiry'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
