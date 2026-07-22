import React, { useState } from "react";
import { 
  MapPin, Phone, MessageSquare, Clock, Mail, ShieldAlert,
  Send, CheckCircle, AlertCircle, Loader2, ArrowRight
} from "lucide-react";
import { BUSINESS_INFO } from "../types";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    // Simulate API delivery
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="space-y-16 py-10 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Get In Touch</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-slate-900 dark:text-white tracking-tight">
          Contact Our Store
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          Have queries about specialty medicines or chronic drug stocks? Reach out directly via phone, WhatsApp, or our quick contact form.
        </p>
      </section>

      {/* 2. CORE DETAILS & CONTACT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info Block */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Quick Cards Info */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 space-y-6">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Store Location & Details</h3>
              
              {/* Address item */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Physical Store Address</span>
                  <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                    {BUSINESS_INFO.location}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    📍 Located prominently near Panchmukhi Mahadeo Mandir.
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Store Working Hours</span>
                  <div className="mt-1 space-y-1">
                    {BUSINESS_INFO.workingHours.map((hours, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <span className="font-medium text-slate-500 dark:text-slate-400">{hours.days}</span>
                        <span className="font-bold">{hours.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call support */}
              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Call Customer Support</span>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`} 
                    className="block text-brand-accent font-extrabold text-sm sm:text-base mt-1 hover:underline"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-[10px] text-slate-400">Click to call directly from your mobile device.</p>
                </div>
              </div>

              {/* WhatsApp direct chat */}
              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <div className="w-10 h-10 rounded-xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-[#0A8F6A]/5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">WhatsApp Direct Chat</span>
                  <a 
                    href={`https://wa.me/919334034440?text=Hello%20Atul%20Enterprise%20Branch`}
                    target="_blank"
                    className="block text-[#0A8F6A] font-extrabold text-sm sm:text-base mt-1 hover:underline"
                  >
                    {BUSINESS_INFO.whatsappFormatted}
                  </a>
                  <p className="text-[10px] text-slate-400">Get availability and quote details instantly.</p>
                </div>
              </div>

            </div>

            {/* Home Delivery Info Card */}
            <div className="bg-emerald-50 dark:bg-slate-900 p-6 rounded-3xl border border-emerald-100/60 dark:border-slate-800">
              <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-brand-accent" />
                <span>Nearby Delivery Information</span>
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                {BUSINESS_INFO.deliveryInfo} We prioritize prescription drugs for bedridden patients and senior citizens in Dulhingunj and nearby Gaya localities.
              </p>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 text-left shadow-lg">
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mb-2">
              Quick Inquiry Form
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-6">
              Fill in your contact details below and our pharmacy staff will get back to you within 2 business hours.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {error && (
                <div className="flex items-center gap-2.5 p-4 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 rounded-2xl text-xs sm:text-sm border border-rose-100">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="font-semibold">{error}</span>
                </div>
              )}

              {success && (
                <div className="flex items-center gap-2.5 p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 rounded-2xl text-xs sm:text-sm border border-emerald-100">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="font-bold">Inquiry submitted successfully! Our representative will call you soon.</span>
                </div>
              )}

              {/* Name field */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone field */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9334034440"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
                  />
                </div>
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Your Message or Requirement <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you? (Describe required medicines or surgical items)"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                id="contact-form-submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-brand-accent hover:bg-emerald-600 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white font-bold text-sm shadow-md glow-btn transition-colors cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Quick Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. GOOGLE MAPS EMBEDDED SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 shadow-lg text-left space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg">Google Interactive Store Map</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs">Find us near the historic Panchmukhi Mahadeo Mandir, Dulhingunj, Gaya.</p>
            </div>
            
            <a
              id="map-external-link"
              href="https://maps.google.com/?q=Tekari+Rd,+near+Panchmukhi+Mahadeo+Mandir,+Dulhingunj,+Gaya,+Bihar+823001"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline"
            >
              <span>Open in Google Maps App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Frame Container */}
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800 relative bg-slate-100">
            {/* Embedded maps iframe representing the exact location of Panchmukhi Mahadeo Mandir area on Tekari Road in Gaya */}
            <iframe
              id="gaya-google-map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m4!1s0x39f32a033fa0f62d:0xd90998ea32ee6e99!2sTekari+Rd,+Dulhingunj,+Gaya,+Bihar+823001!3s!2m2!1d85.0006!2d24.7964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a24687d6bb9%3A0xe54d3d2db73b64c!2sPanchmukhi+Mahadeo+Mandir!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Atul Enterprise Branch Location Map"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
