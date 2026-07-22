import React, { useState } from "react";
import { Pill, Phone, MessageSquare, Sun, Moon, Menu, X, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../types";

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ currentTab, setCurrentTab, darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-sm glass-effect border-b border-slate-200/60 dark:bg-slate-900/90 dark:border-slate-800 dark:shadow-slate-950/20">
      {/* Top Bar with Emergency Announcement & Hours */}
      <div className="bg-gradient-to-r from-brand-accent to-emerald-700 text-white text-xs px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center bg-white/20 px-2 py-0.5 rounded-full font-bold uppercase text-[9px] tracking-wider animate-pulse">Emergency</span>
            <span>Call: <a href={`tel:${BUSINESS_INFO.phone}`} className="font-semibold underline hover:text-emerald-100">{BUSINESS_INFO.phoneFormatted}</a> (08:00 AM - 10:00 PM)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Gaya, Bihar: Open Daily</span>
            </span>
            <span className="hidden md:inline bg-emerald-800/40 px-2.5 py-0.5 rounded font-medium text-[10px]">100% Genuine Medicines Guarantee</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex justify-between items-center gap-4">
          
          {/* Logo & Brand Name */}
          <button 
            id="logo-brand-btn"
            onClick={() => handleNavClick("home")} 
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent p-2 rounded-xl border border-brand-accent/20 group-hover:scale-105 transition-transform duration-200">
              <Pill className="w-6.5 h-6.5 text-brand-accent" />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-brand-accent transition-colors">
                ATUL ENTERPRISE <span className="text-brand-accent">BRANCH</span>
              </h1>
              <p className="text-[9px] text-slate-500 dark:text-slate-400 font-mono tracking-widest uppercase">
                Dulhingunj Pharmacy • Gaya
              </p>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  currentTab === item.id
                    ? "bg-brand-accent text-white shadow-sm shadow-emerald-700/10"
                    : "text-slate-600 hover:text-brand-accent hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Utility Buttons: Dark Mode, Phone, WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dark Mode Toggle */}
            <button
              id="desktop-darkmode-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200/80 hover:bg-slate-50 text-slate-600 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
            </button>

            {/* Direct Call Button */}
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>Call Store</span>
            </a>

            {/* Direct WhatsApp Order */}
            <button
              id="header-whatsapp-modal-btn"
              onClick={() => {
                const element = document.getElementById("whatsapp-form-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  handleNavClick("home");
                  setTimeout(() => {
                    document.getElementById("whatsapp-form-section")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }
              }}
              className="flex items-center gap-1.5 px-4.5 py-2 text-xs font-bold text-white bg-[#0A8F6A] hover:bg-[#087758] rounded-xl shadow-sm transition-all glow-btn cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white/10" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Right Controls (Hamburger & Dark Mode) */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              id="mobile-darkmode-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
            
            <button
              id="mobile-menu-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Table Only Tablet/Mobile Menu Icon for width > 640px but < 1024px */}
          <div className="hidden sm:flex lg:hidden items-center gap-2">
            <button
              id="tablet-darkmode-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
            </button>
            <button
              id="tablet-menu-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2 animate-fadeIn shadow-inner">
          <div className="grid grid-cols-1 gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  currentTab === item.id
                    ? "bg-brand-accent/10 text-brand-accent dark:bg-brand-accent/20"
                    : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Quick Contact buttons in Mobile View */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
            <a
              id="mobile-menu-call"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-1.5 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>Call Us</span>
            </a>
            <button
              id="mobile-menu-whatsapp"
              onClick={() => {
                setMobileMenuOpen(false);
                const element = document.getElementById("whatsapp-form-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  handleNavClick("home");
                  setTimeout(() => {
                    document.getElementById("whatsapp-form-section")?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }
              }}
              className="flex items-center justify-center gap-1.5 py-3 text-sm font-bold text-white bg-[#0A8F6A] rounded-xl shadow-sm hover:bg-[#087758]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
