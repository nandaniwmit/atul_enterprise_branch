import React from "react";
import { Pill, Phone, MessageSquare, MapPin, Mail, Clock, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { BUSINESS_INFO } from "../types";

interface FooterProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ currentTab, setCurrentTab }: FooterProps) {
  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
        
        {/* Brand Information Column */}
        <div className="lg:col-span-4 space-y-5">
          <button 
            id="footer-brand-logo"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 text-left cursor-pointer"
          >
            <div className="bg-brand-accent/20 text-brand-accent p-2 rounded-xl border border-brand-accent/20">
              <Pill className="w-5.5 h-5.5 text-brand-accent" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-base tracking-tight text-white">
                ATUL ENTERPRISE <span className="text-brand-accent">BRANCH</span>
              </h4>
              <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">
                Dulhingunj Pharmacy • Gaya
              </p>
            </div>
          </button>
          
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Your Trusted Medical Store for 100% Genuine Medicines, Surgical supplies, Pediatric Care, and Diabetic essentials in Gaya, Bihar. Located right near Panchmukhi Temple.
          </p>

          <div className="flex gap-2.5">
            <a
              id="footer-call-now"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2.5 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl transition-all"
              aria-label="Call Store"
            >
              <Phone className="w-4.5 h-4.5 text-emerald-400" />
            </a>
            <a
              id="footer-whatsapp-now"
              href={`https://wa.me/919334034440?text=Hello%20Atul%20Enterprise%20Branch`}
              target="_blank"
              className="p-2.5 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl transition-all"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-4.5 h-4.5 text-emerald-400 fill-emerald-500/10" />
            </a>
            <a
              id="footer-location-now"
              href="https://maps.google.com/?q=Tekari+Rd,+near+Panchmukhi+Mahadeo+Mandir,+Dulhingunj,+Gaya,+Bihar+823001"
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-xl transition-all"
              aria-label="View Map Location"
            >
              <MapPin className="w-4.5 h-4.5 text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-4">
          <h5 className="font-display font-bold text-white text-sm sm:text-base tracking-wide uppercase text-[11px] text-slate-400">Quick Links</h5>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {["home", "about", "services", "gallery", "contact"].map((item) => (
              <li key={item}>
                <button
                  type="button"
                  id={`footer-link-${item}`}
                  onClick={() => handleNavClick(item)}
                  className={`capitalize transition-colors cursor-pointer hover:text-brand-accent ${
                    currentTab === item ? "text-brand-accent font-bold" : "text-slate-400"
                  }`}
                >
                  {item} Page
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Services Column */}
        <div className="lg:col-span-3 space-y-4">
          <h5 className="font-display font-bold text-white text-sm sm:text-base tracking-wide uppercase text-[11px] text-slate-400">Our Offerings</h5>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-brand-accent cursor-pointer">
                Prescription Tablets & Capsules
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-brand-accent cursor-pointer">
                Pediatric Baby Care Products
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-brand-accent cursor-pointer">
                Insulins & Diabetic Support
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-brand-accent cursor-pointer">
                Clinical Diagnostic Equipment
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-brand-accent cursor-pointer">
                Surgical & First Aid Consumables
              </button>
            </li>
          </ul>
        </div>

        {/* Address & Hours Column */}
        <div className="lg:col-span-3 space-y-4 text-xs">
          <h5 className="font-display font-bold text-white text-sm sm:text-base tracking-wide uppercase text-[11px] text-slate-400">Working Hours</h5>
          
          <div className="space-y-3">
            <div className="flex gap-2.5 items-start">
              <Clock className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Daily Operations</p>
                <p className="text-slate-400 mt-0.5 text-[11px]">Mon - Sat: 08:00 AM - 10:00 PM</p>
                <p className="text-slate-400 text-[11px]">Sunday: 09:00 AM - 08:00 PM</p>
              </div>
            </div>

            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Dulhingunj Store</p>
                <p className="text-slate-400 mt-0.5 text-[11px] leading-relaxed">
                  Tekari Road, near Panchmukhi Mandir, Gaya, Bihar 823001
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Medical Policy Disclaimer Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800/60 text-left space-y-4">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[10px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-400 mb-1 uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
            <span>Important Medical Disclaimer & Guidance:</span>
          </p>
          <span>
            The information, services, and diagnostic summaries provided on this website are for educational and inquiry-convenience purposes only. They do not constitute official clinical advice. All prescription medicines dispensed at <strong>ATUL ENTERPRISE BRANCH</strong> require a valid physical or digital prescription verified from a registered medical practitioner (doctor). Do not self-medicate or alter dosage schedules without expert physician consultation.
          </span>
        </div>

        {/* Copyright panel */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 pt-2 font-mono">
          <p>
            © {currentYear} Atul Enterprise Branch. All Rights Reserved. | Developed by{" "}
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </p>
          
          <div className="flex gap-4">
            <button 
              id="footer-privacy-btn"
              onClick={() => alert("Privacy Policy:\nWe only store contact form metadata locally to response to your requests. Your medical prescription files are treated with 100% strict patient confidentiality and are never shared with third-party sources.")} 
              className="hover:text-brand-accent cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              id="footer-terms-btn"
              onClick={() => alert("Terms of Service:\n1. All ordered schedule drugs are subject to physical prescription verification on delivery or pick-up.\n2. Delivery ranges are restricted within the city limits of Gaya, Bihar.")} 
              className="hover:text-brand-accent cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button 
              id="footer-disclaimer-btn"
              onClick={() => alert("Disclaimer:\nAtul Enterprise Branch is a fully licensed pharmacy under the Drugs Control Administration of Bihar. We comply with all national regulatory pharmaceutical norms.")} 
              className="hover:text-brand-accent cursor-pointer"
            >
              Regulatory Licenses
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
